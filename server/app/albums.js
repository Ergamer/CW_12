const Album = require('../models/Album');
const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');


const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const config = require('../config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});


const createRouter = () => {
    const router = express.Router();
    router.get('/', (req, res) => {
        if(req.query.user) {
                Album.find({user: req.query.user})
                    .then(albums => res.send(albums))
                    .catch(() => res.sendStatus(500));
        } else {
            Album.find()
                .then(albums => res.send(albums))
                .catch(() => res.sendStatus(500));
        }
    });

    router.get('/:id', (req, res) => {
            Album.findOne({_id: req.params.id})
                .then(albums => res.send(albums))
                .catch(() => res.sendStatus(500));
    });



    router.post('/', [auth, upload.single('image')], (req, res) => {
        console.log(req.body);
        const albumData = req.body;
        const token = req.get('Token');
        console.log(token);

        if (req.file) {
            albumData.image = req.file.filename;
        } else {
            albumData.image = null;
        }

        albumData.user = req.user
        const album = new Album(req.body);


        album.save()
            .then(album => res.send(album))
            .catch(error => res.status(400).send(error));
    });
    router.delete('/:id', auth, async (req, res) => {
        const album = await Album.findOne({_id: req.params.id});

        if(album.user.toString() !== req.user._id) return res.status(403).send({error: 'Permission denied'});

        album.remove()
            .then(() => res.send('Artist was deleted!'))
            .catch(error => res.status(400).send(error));
    });

    return router;
};

module.exports = createRouter;

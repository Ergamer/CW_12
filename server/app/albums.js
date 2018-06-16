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
        Album.find()
            .then(albums => res.send(albums))
            .catch(() => res.sendStatus(500));
    });

    router.post('/', [auth, permit('admin'), upload.single('image')], (req, res) => {
        const artistData = req.body;

        if (req.file) {
            artistData.image = req.file.filename;
        } else {
            artistData.image = null;
        }

        const album = new Album(req.body);


        album.save()
            .then(artist => res.send(album))
            .catch(error => res.status(400).send(error));
    });

    return router;
};

module.exports = createRouter;

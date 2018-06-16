const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, '/public/uploads'),
    db: {
        url: 'mongodb://localhost:27017',
        name: 'albums'
    },
    facebook: {
        appId: "392830884569369", // Enter your app ID here
        appSecret: "ba76dec459c763fd54464673bbe19ce1" // Enter your app secret here
    }
};


var config = require('dotenv');

config.config();

module.exports = {
    mongodbURL: process.env.MONGODB_URL || 'mongodb://localhost/productoFP',
    cloudinaryNAME: process.env.CLOUDINARY_NAME,
    cloudinaryAPI_KEY: process.env.CLOUDINARY_API_KEY,
    cloudinaryAPI_SECRET: process.env.CLOUDINARY_API_SECRET,
}
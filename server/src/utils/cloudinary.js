import { v2 as cloudinary } from 'cloudinary';

console.log("CLOUDINARY_NAME:", process.env.CLOUDINARY_CLOUD_NAME);

// Change this to a named export
export const uploadToCloudinary = (fileBuffer) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'user_profiles' },
        (error, result) => {
            if (error) return reject(error);
            resolve(result);
        }
        );
        uploadStream.end(fileBuffer);
    });
};
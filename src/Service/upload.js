import cloudinary from "../config/cloudinaryConfig.js";

class uploadService {

    async uploadFile(data) {
        try {
            console.log("Uploading file to Cloudinary...",data);
            if(data.public_id){
                await cloudinary.uploader.destroy(data.public_id);
            }
            const result = await cloudinary.uploader.upload(data.buffer);
            return {
                url: result.secure_url,
                public_id: result.public_id
            };
        } catch (error) {
            console.error("Error uploading file to Cloudinary:", error);
            throw new Error("File upload failed");
        }
    }

}

export default uploadService;
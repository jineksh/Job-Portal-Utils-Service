import uploadService from "../Service/upload.js"

const uploadSvc = new uploadService();

export const uploadFile = async (req,res,next) => {

    try {
        const result = await uploadSvc.uploadFile(req.body);

        return res.status(200).json({
            success: true,
            message: "File uploaded successfully",
            data: result
        });
    } catch (error) {
        next(error);
        return res.status(500).json({
            success: false,
            message: "File upload failed",
            error: error.message
        });
    }
}
import uploadService from "../Service/upload.js"

const uploadSvc = new uploadService();

export const uploadFile = async (req, res, next) => {

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

export const deleteFile = async (req, res, next) => {
    try {
        const { publicId } = req.body;

        if (!publicId) {
            return res.status(400).json({
                success: false,
                message: "Public id is not given"
            });
        }
        const response = await uploadSvc.deleteFromCloudinary(publicId);

        return res.status(200).json({
            success: true,
            message: "File successfully deleted",
            data: response
        });



    } catch (error) {
        return res.status(error.status || 500).json({
            success: false,
            message: error.message || "File not delete"
        });
    }
}
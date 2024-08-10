


// Controller to get all user
exports.getAllUsers = async (request, response) => {
    try {
        response.status(200).json({"status":true,"message":"Data found successfully", "data":[]});
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};
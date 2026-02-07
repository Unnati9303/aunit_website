const career = require("../Models/careerSchema");

const createCareer = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, position, linkdin, github } = req.body;
        
        const resume = req.file ? req.file.filename : null;

        let newContact = new career({
            firstname,
            lastname,
            email,
            phone,
            position,
            linkdin,
            github,
            resume
        });

        await newContact.save();

        res.send({
            success: true,
            message: "New contact created successfully",
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error creating contact",
        });
    }
};

const getAllCareer = async (req, res) => {
    try {
        let data = await career.find();
        res.send({
            success: true,
            message: "Retrieved all users",
            users: data,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error fetching users",
        });
    }
};

const getCareerById = async (req, res) => {
    try {
        let id = req.params.id;
        let userdata = await career.findById(id);

        if (!userdata) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        res.send({
            success: true,
            message: "Retrieved user",
            user: userdata,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error fetching user",
        });
    }
};

const updateCareer = async (req, res) => {
    try {
        let id = req.params.id;
        let { firstname, lastname, email, phone, position, linkdin, github } = req.body;

        let updateData = { firstname, lastname, email, phone, position, linkdin, github };
        if (req.file) {
            updateData.resume = req.file.filename;
        }

        let updatedData = await career.findByIdAndUpdate(id, updateData);

        if (!updatedData) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        res.send({
            success: true,
            message: "User updated successfully",
            data: updatedData,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error updating user",
        });
    }
};

const deleteCareer = async (req, res) => {
    try {
        let id = req.params.id;
        let deletedUser = await career.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        res.send({
            success: true,
            message: `User deleted successfully`,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error deleting user",
        });
    }
};

module.exports = { createCareer, getAllCareer , getCareerById, updateCareer, deleteCareer };

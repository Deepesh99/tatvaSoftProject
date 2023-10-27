const User = require("../schema/user");

exports.register = async (req, res) => {
    try {
        const {
            firstName, lastName,email,password,dob,role
        } = req.body;

        const user = await User.findOne({
            where: {email}
        });
        if(user) {
            return res.json({status:"fail",message: 'User already exist'});
        }

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password,
            dob,
            role
        });
        if(newUser) {
            return res.status(201).json({status:'success', message: 'User created in db'});
        } else {
            return res.json({status: 'fail', message: 'unable to register'});
        }
    } catch(err) {
        console.log(err);
        return res.status(500).json({status:'fail', message: "server error", err});
    }

};

exports.login = async (req,res) => {

};
const {
    readFile
} = require('../utils/fileHandler');

const loginUser = async (req, res, next) => {
    try {
        const {
            username,
            password
        } = req.body;

        const users = await readFile('./database/users.json');

        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Login successful'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    loginUser
};
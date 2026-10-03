const authService = require("../service/auth.service");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required",
            });
        }

        const result = await authService.registerUser(
            name,
            email,
            password
        );
        console.log("result===", result)
        return res.status(201).json(result);
    } catch (error) {
        console.log("REGISTER ERROR:", error);

        return res.status(500).json({
            message: "Registration failed",
            error: error.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        const result = await authService.loginUser(email, password);

        if (!result.success) {
            return res.status(401).json({
                message: result.message,
            });
        }

        return res.status(200).json(result);
    } catch (error) {
        console.log("LOGIN ERROR:", error);

        return res.status(500).json({
            message: "Login failed",
            error: error.message,
        });
    }
};

// Protected route
const protectedRoute = (req, res) => {
    res.status(200).json({
        success: true,
        message: "You have access to the protected route",
        user: req.user,
    });
};

module.exports = {
    register,
    login,
    protectedRoute,

};

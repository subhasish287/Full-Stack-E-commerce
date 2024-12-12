import jwt from "jsonwebtoken";

export const adminAuth = async (req, res, next) => {
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });  
    }
};
import jwt from 'jsonwebtoken';
const userAuth = async(req, res, next) => {
    try {
        const token = req.headers.authorization;

        let decodedData;        
        if(token) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET);
            req.body.userId = decodedData.userId;
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
        
        next();        
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized" });
    }
};

export default userAuth;
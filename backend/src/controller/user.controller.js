import bcrypt from 'bcryptjs';
import User from '../model/user.model.js';
import jwt from 'jsonwebtoken';
const register = async(req, res) => {  
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({success: false,message: 'All fields are required'});
        }
        
        
        const  existingUser = await User.findOne({$or: [{email: email}, {name: name}]});
        
        if (existingUser) {
            return res.status(400).json({success:false,message: 'User already exists'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({name, email, password: hashedPassword});
        await user.save();
        const userData = await User.findById(user._id).select('-password');
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
         return res
                .status(200)
                .cookie('token', token, {
                    httpOnly: true
                })
                .json({userData,success: true, message: 'User registered successfully', token});

    } catch (error) {
        return res.status(500).json({success: false,message: error.message});
    }
  }

  const login = async(req, res) => {
    
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({success: false,message: 'All fields are required'});
        }
        
        
        const user = await User.findOne({email});
        if (!user) {     
            return res.status(400).json({success: false,message: 'User does not exist'});
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({success: false,message: 'Invalid credentials'});
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
        const userData = await User.findById(user._id).select('-password');
        return res
                .status(200)
                .cookie('token', token, {
                    httpOnly: true
                })
                .json({userData,success: true,message: 'User logged in successfully', token});

    } catch (error) {
        return res.status(500).json({success: false,message: error.message});
    }
};

const userLogout = async(req, res) => {  
    return res
            .status(200)
            .clearCookie('token')
            .json({success: true,message: 'User logged out successfully'});
};

const adminUser = async(req, res) => {  
   try {
    const {email,password} = req.body;
    
    console.log(email,password);
    
    if(!email || !password){
        return res.status(400).json({success: false,message: 'All fields are required'});
    }
    
    if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD)
    {
        return res.status(400).json({success: false,message: 'Invalid credentials'});
    }

    const token = jwt.sign( email+password, process.env.JWT_SECRET);
    console.log(process.env.ADMIN_EMAIL,process.env.ADMIN_PASSWORD);
    res.status(200).json({success: true,token,message: 'Admin logged in successfully'});

   } catch (error) {
    res.status(500).json({success: false, message: error.message});
   }
};
const adminLogout = async(req, res) => {
    return res
            .status(200)
            .clearCookie('token')
            .json({success: true,message: 'Admin logged out successfully'});
};

export { register, login,userLogout,adminUser,adminLogout};
import { Router } from 'express'
import { register, login,userLogout,adminUser,adminLogout } from '../controller/user.controller.js'
const userRouter = Router();


userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get("/logout",userLogout);
userRouter.post("/admin",adminUser);
userRouter.get("/admin/logout",adminLogout);

export default userRouter

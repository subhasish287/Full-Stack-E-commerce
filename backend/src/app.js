
import express from 'express';
const app = express();
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import cartRouter from './routes/cart.routes.js';
import orderRouter from './routes/order.routes.js';
import reviewRouter from './routes/review.routes.js';
import cors from 'cors';
app.use(cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        origin: ["http://localhost:5173","https://e-comfrontend-git-master-santu-roys-projects-ee0d7c21.vercel.app","https://e-comfrontend-dgr3xqaur-santu-roys-projects-ee0d7c21.vercel.app/","https://fullstack-e-commerce-1-0v8u.onrender.com","https://e-commerce-frontend-nqds.onrender.com","https://e-comfrontend.vercel.app","http://localhost:5174"],  // Or specify the origin like 'http://localhost:5173'
        credentials: true  // Allow cookies or credentials to be sent            
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users",userRouter);
app.use("/api/v1/products",productRouter);
app.use("/api/v1/carts",cartRouter);
app.use("/api/v1/orders",orderRouter);
app.use("/api/v1/review",reviewRouter);
export default app

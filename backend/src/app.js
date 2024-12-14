
import express from 'express';
const app = express();
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import cartRouter from './routes/cart.routes.js';
import orderRouter from './routes/order.routes.js';
import cors from 'cors';
app.use(cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
<<<<<<< HEAD
        origin: ['http://localhost:5173','https://full-stack-e-commerce-k455.vercel.app'],  // Or specify the origin like 'http://localhost:5173'
        credentials: true
}

));
=======
        origin: ["https://e-comfrontend-git-master-santu-roys-projects-ee0d7c21.vercel.app","https://e-comfrontend-dgr3xqaur-santu-roys-projects-ee0d7c21.vercel.app/",'http://localhost:8080',"https://fullstack-e-commerce-1-0v8u.onrender.com","https://e-commerce-frontend-nqds.onrender.com","https://e-comfrontend.vercel.app"],  // Or specify the origin like 'http://localhost:5173'
        credentials: true  // Allow cookies or credentials to be sent
            
}));
>>>>>>> 42f4814d35a6c72174aec2d55a8bc7ca4a786315
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users",userRouter);
app.use("/api/v1/products",productRouter);
app.use("/api/v1/carts",cartRouter);
app.use("/api/v1/orders",orderRouter);

export default app

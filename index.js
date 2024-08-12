const express =  require("express");
const productRoutes=require("./routes/productRoutes")
const userRoutes=require("./routes/userRoutes")
const cartRoutes=require("./routes/cartRoutes")
const orderRoutes=require("./routes/orderRoutes")
const app=express();

const mongoose=require('mongoose');
app.use(express.json());
mongoose.connect(
    "mongodb+srv://arrthim1012:arrthi@cluster0.1pz2xrp.mongodb.net/ecommerce"
).then(()=>{
    console.log("Connected to database");
})
app.use("/products",productRoutes);
app.use("/user",userRoutes);
app.use("/cart",cartRoutes);
app.use("/order",orderRoutes);


app.listen(1000,()=>{
    console.log("Server is running on port 3000");
})
 

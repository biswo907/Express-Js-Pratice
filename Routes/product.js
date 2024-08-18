import express from "express";
import { getProduct } from "../Controller/productController.js";
import { auth } from "../Middlewares/auth.js";

const router = express.Router();


router.get("/product", auth, getProduct);


router.post("/upload", (req, res) => {
    console.log("Upload Image");
    res.status(200).json({ key: "image upload successfull" })

});


export default router;

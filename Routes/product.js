import express from "express";
import { getProduct } from "../Controller/productController.js";
import { auth } from "../Middlewares/auth.js";

const router = express.Router();

/**
 * @swagger
 * /api/v1/demoProduct:
 *   get:
 *     summary: Retrieve demo products
 *     description: Returns a list of demo products.
 *     responses:
 *       200:
 *         description: A list of demo products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 */
router.get('/demoProduct', (req, res) => {
    const demoProducts = [
        { id: 1, name: 'Demo Product 1', price: 29.99 },
        { id: 2, name: 'Demo Product 2', price: 19.99 },
        { id: 3, name: 'Demo Product 3', price: 39.99 },
    ];

    res.json(demoProducts);
});

/**
 * @swagger
 * /api/v1/product:
 *   get:
 *     summary: Retrieve products
 *     description: Returns a list of products.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/product", auth, getProduct);

/**
 * @swagger
 * /api/v1/upload:
 *   post:
 *     summary: Upload an image
 *     description: Uploads an image file.
 *     responses:
 *       200:
 *         description: Image upload successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 key:
 *                   type: string
 *                   example: image upload successful
 */
router.post("/upload", (req, res) => {
    console.log("Upload Image");
    res.status(200).json({ key: "image upload successful" });
});



export default router;

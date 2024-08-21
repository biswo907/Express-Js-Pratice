import express from "express"
const app = express()
import productRoute from "./Routes/product.js";
import userRoute from "./Routes/user.js";
import bodyParser from 'body-parser';
import connectDB from "./utils/db.js";
import { swaggerUi, swaggerSpec } from './config/swagger.js';


// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));




// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 👉This is built in middleware
// app.use(express.json()); // Built-in middleware to parse JSON
// app.use(express.urlencoded({ extended: true })); // Built-in middleware to parse URL-encoded data

app.use('/api/v1', productRoute)
app.use('/api/v1', userRoute)





const PORT = 3000

connectDB()

app.listen(PORT, () => {
    console.log("Server is Running on PORT-", PORT);

})
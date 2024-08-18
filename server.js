import express from "express"
import multer from "multer"
const app = express()
import productRoute from "./Routes/product.js";
import userRoute from "./Routes/user.js";
import bodyParser from 'body-parser';
import connectDB from "./utils/db.js";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file?.originalname}`)
    }
})

const upload = multer({ storage: storage })


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 👉This is built in middleware
// app.use(express.json()); // Built-in middleware to parse JSON
// app.use(express.urlencoded({ extended: true })); // Built-in middleware to parse URL-encoded data

app.use('/api', productRoute)
app.use('/api', userRoute)


app.post('/upload-image', upload.single('avatar'), function (req, res, next) {
    res.status(201).json({ key: "image upload..............." })

    console.log("File", req.file);
    console.log("Query", req.query);
    console.log("Body", req.body);


    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})


const PORT = 3000

connectDB()

app.listen(PORT, () => {
    console.log("Server is Running on PORT-", PORT);

})
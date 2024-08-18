import jwt from 'jsonwebtoken';

const SECRET_KEY = "biswo@123"


export const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization
        if (token) {
            token = token.split(" ")[1]
            let user = jwt.verify(token, SECRET_KEY)
            console.log("User", user);

            // req.userId = user.id
            next()
        } else {
            return res.status(401).json({ message: "Unauthorised User" })
        }


    } catch (error) {
        console.log("ERROR", error);
        res.status(401).json({ message: "Unauthorised User" })

    }
}
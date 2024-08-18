import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

export const uploadSingle = (fieldName) => (req, res, next) => {
    upload.single(fieldName)(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.error('Multer error:', err); // Log Multer errors
            res.status(400).json({ error: 'File upload error', details: err.message });
        } else if (err) {
            console.error('Unknown error:', err); // Log other errors
            res.status(500).json({ error: 'Internal server error', details: err.message });
        } else {
            next(); // Proceed if no errors
        }
    });
};

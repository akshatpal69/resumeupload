const express = require("express")
const router = express.Router()
const connection = require('../database')
const path = require("../path");
let fs = require('fs');

const multer = require("multer")


let fileInfo
let directoryPath = path + '/public/files'
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err.message);
    }
    fileInfo = files
});
const multerStorage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, "public");
    },
    filename: (req, file, next) => {
        const ext = file.mimetype.split("/")[1];
        next(null, `files/RESUME-${file.originalname}-${Date.now()}.${ext}`);
    },
});
const multerFilter = (req, file, next) => {
    if (file.mimetype.split("/")[1] === "pdf") {
        next(null, true);
    } else {
        next(new Error("Not a PDF File!!"), false);
    }
};
//Calling the "multer" Function
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});




router.post("/upload", upload.single("resume"), async (req, res) => {
    // Stuff to be added later
    filename = req.file.filename
    console.log(req.body)

    const { name, date, country, timestamp } = req.body
    if (!name || !date || !country || !timestamp) {
        return res.status(400).json({ error: 'empty dataFields' })
    }
    const query = `Insert Into user(name, date, country, filename, timestamp) Values("${name}","${date}","${country}","${filename}","${timestamp}");`
    connection.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.code });
        }
        res.status(200).json({ response: 'ok' });
    })
    // return res.status(200).json({ response: { name, date, country } })
    console.log(name, date, country, timestamp)
});


router.get("/download", async (req, res) => {
    const query = `select * from user`
    // console.log(fileInfo.length)
    // return res.status(200).json({response:fileInfo})
    connection.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        userData = result
        return res.status(200).json({ response: fileInfo, userData  })
    })
})

module.exports = router

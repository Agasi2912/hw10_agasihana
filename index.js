const express = require ('express');
const app = express ();
// const ejs = require('ejs');
const multer = require ('multer');
const path = require ('path');
const router = require("./routes");
const PORT = 3000;

app.use('/upload', express.static(path.join(__dirname, 'upload')));
// app.set(ejs)
app.set('view engine', 'ejs');

app.use(express.urlencoded( { extended: false }));

app.use(router);


// menentukan lokasi pengunggahan
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/upload'));
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + '_' + Date.now() + path.extname(file.originalname)
        );
    },
});

// const contacts = [
//     {
//         name: 'Nana',
//         phone: '089267182661',
//     },
//     {
//         name: 'Olla',
//         phone: '088867182901',
//     }
// ];

// function validateindex(req, res, next) {
//     if (
//         req.query.index !== undefined &&
//         contacts[req.query.index] === undefined
//     ) {
//         res.send({ success:false});
//     } else {
//         next();
//     }
// }

//  app.use(validateindex);
app.use(express.json());

// app.get ('/contact', function (req, res) {
//     res.send(contacts);
// });

//  app.post ('/contact', function (req, res) {
//     contacts.push({ name: req.body.name, phone: req.body.phone});
//     res.send({ success: true });
//  });

// app.put ('/contact', function (req, res) {
//      contacts [req.query.index] = { name: req.body.name, phone: req.body.phone};
//      res.send( {success: true});
//  });

// app.delete ('/contact', function (req, res) {
//     contacts.splice(req.query.index,1);
//     res.send( {success: true});
// });

app.put(
    '/movies/upload',
    multer({ storage: diskStorage}).single('photo'),
    (req,res) => {
        const file = req.file.path;
        console.log(file);
        if (!file) {
            res.status(400).send({
                status: false,
                data: 'No File is selected',
            });
        };
//         //menyimpan lokasi upload data contacts pada index yang diinginkan
//         // contacts[req.query.index].photo = req.file.path;
        res.send(file);
    }
);

app.listen(PORT, ()=>{
    console.log(`APPS berjalan di ${PORT}`);
});
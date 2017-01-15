var express = require('express');
var router = express.Router();
var multer  = require('multer');
var MEGABYTES = 1024 * 1024;
var upload = multer({ storage: multer.memoryStorage(), limits: {fileSize: 2 * MEGABYTES, files: 1} });

router.get('/', function(req, res) {
  res.send("Não implementado");
});

router.get('/importar/csv', function(req, res) {
  res.render('lancamentos/importarCSV', {});
});

router.post('/importar/csv', upload.single('csvFile'), function(req, res) {
  res.send("Ok!" + req.file.size);
});

module.exports = router;

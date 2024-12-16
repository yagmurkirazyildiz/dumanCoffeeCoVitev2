const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// CORS için ayar
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Yüklenen dosyaların kaydedileceği klasör
const uploadFolder = path.join(__dirname, "uploads");

// Klasör yoksa oluştur
const fs = require("fs");
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

// Multer ile dosya yükleme ayarları
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// API endpoint: Dosya yükleme
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("Dosya yüklenmedi!");
  }

  // Dosyanın path bilgisini döndür
  res.status(200).json({
    fileName: req.file.originalname, // Düzeltildi
    message: "Dosya başarıyla yüklendi!",
    filePath: `/uploads/${req.file.filename}`, // Düzeltildi
  });
});

console.log(`File uploaded: ${file.filename}`);

// Yüklenen dosyaları görüntülemek için statik servis
app.use("/files", express.static(uploadFolder));

// Server'ı başlat
app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});

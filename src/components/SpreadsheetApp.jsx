import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]); // Dosyaların listesini tutar
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Lütfen bir dosya seçin!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5001/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage(response.data.message);

      // Yeni yüklenen dosyayı listeye ekle
      setUploadedFiles((prevFiles) => [
        ...prevFiles,
        { name: response.data.fileName, path: response.data.filePath },
      ]);
    } catch (error) {
      console.error("Yükleme hatası:", error);
      setMessage("Dosya yükleme başarısız!");
    }
  };

  return (
    <div>
      <h2>Dosya Yükleme</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Yükle</button>
      </form>
      <p>{message}</p>

      {/* Yüklenen Dosyaların Listesi */}
      <h3>Yüklenen Dosyalar</h3>
      <ul>
        {uploadedFiles.map((file, index) => (
          <li key={index}>
            <a
              href={`http://localhost:5001${file.path}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;

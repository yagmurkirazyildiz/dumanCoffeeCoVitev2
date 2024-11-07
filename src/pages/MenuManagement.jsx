import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MenuManagement.css";

const MenuManagement = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    imageUrl: "",
    description: "",
  });
  const [newCategory, setNewCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const API_BASE_URL = "http://localhost:1416/duman"; // API'nin temel URL'i

  // Kategorileri ve ürünleri backend'den al
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  // Kategorileri al
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/CATEGORY/all`);
      setCategories(response.data.data || []);
    } catch (error) {
      console.error("Kategoriler alınırken hata oluştu:", error);
    }
  };

  // Ürünleri al
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/PRODUCT/all`);
      setProducts(response.data.data || []);
    } catch (error) {
      console.error("Ürünler alınırken hata oluştu:", error);
    }
  };

  // Yeni ürün ekle
  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price) {
      alert("Tüm alanları doldurunuz");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/PRODUCT/save`, {
        name: newProduct.name,
        categoryId: newProduct.category,
        price: newProduct.price,
        imageUrl: newProduct.imageUrl,
        description: newProduct.description,
      });

      // Başarıyla eklendiyse ürün listesine ekle ve formu sıfırla
      setProducts([...products, response.data.data]);
      setNewProduct({
        name: "",
        category: "",
        price: "",
        imageUrl: "",
        description: "",
      });
      alert("Ürün başarıyla eklendi.");
    } catch (error) {
      console.error("Ürün eklenirken hata oluştu:", error);
      alert("Ürün eklenirken bir hata oluştu.");
    }
  };

  // Yeni kategori ekle
  const handleAddCategory = async () => {
    if (!newCategory) {
      alert("Kategori adını giriniz");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/CATEGORY/save`, {
        name: newCategory,
        description: "", // İsteğe bağlı olarak açıklama ekleyebilirsiniz
      });

      // Başarıyla eklendiyse kategori listesine ekle ve formu sıfırla
      setCategories([...categories, response.data.data]);
      setNewCategory("");
      alert("Kategori başarıyla eklendi.");
    } catch (error) {
      console.error("Kategori eklenirken hata oluştu:", error);
      alert("Kategori eklenirken bir hata oluştu.");
    }
  };

  return (
    <div className="menu-management">
      <h2>Menü Yönetimi</h2>

      {/* Kategori Ekleme */}
      <div className="category-section">
        <h3>Kategori Ekle</h3>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Yeni Kategori Adı"
        />
        <button onClick={handleAddCategory}>Ekle</button>
      </div>

      {/* Ürün Ekleme */}
      <div className="product-section">
        <h3>Ürün Ekle</h3>
        <input
          type="text"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          placeholder="Ürün Adı"
        />
        <input
          type="file"
          value={newProduct.imageUrl}
          onChange={(e) =>
            setNewProduct({ ...newProduct, imageUrl: e.target.value })
          }
          placeholder="Ürün Fotoğrafı"
        />
         <input
          type="text"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          placeholder="Açıklama"
        />
        
        <input
          type="number"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          placeholder="Fiyat"
        />
        <select
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        >
          <option value="">Kategori Seç</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddProduct}>Ekle</button>
      </div>

      {/* Ürün Listeleme */}
      <div className="product-list">
      <h3>Ürün Listesi</h3>
      {products.length === 0 ? (
        <p>Henüz ürün eklenmemiş.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Görsel</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Ürün Adı</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Açıklama</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Kategori ID</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Fiyat</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <img src={product.imageUrl} style={{ width: '50px', height: '50px' }} />
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{product.name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{product.description}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{product.categoryId}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{product.price}₺</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default MenuManagement;

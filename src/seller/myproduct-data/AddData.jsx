import { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import PropTypes from 'prop-types';

export const AddData = ({ handleCloseModal }) => {
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    category_id: "",
    product_name: "",
    desc: "",
    location: "",
    ponds_wide: "",
    production_capacity: "",
    feed_cost: "",
    worker_cost: "",
    maintenance_cost: "",
    selling_price: "",
    estimated_income: "",
    funds_managed: "",
    margin: "",
    product_pict: null,
  });

   // Fungsi untuk menangani perubahan form
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi untuk menangani pemilihan file gambar
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      product_pict: e.target.files[0],
    });
  };

  // Fungsi untuk mengirim data ke backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Menambahkan semua data ke FormData
    Object.keys(formData).forEach((key) => {
      if (key === "product_pict") {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/product", // Ganti dengan URL API Anda
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Pastikan header ini untuk mengirim file
          },
        }
      );

      console.log(response.data); // Menampilkan respon dari server
      alert("Product added successfully!");
      
      handleCloseModal();
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/category");
        console.log(response.data);
        setCategories(response.data.data); // Simpan data kategori
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  
  return (
    <>
      <section className="adddata section">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          style={{ paddingLeft: "30px", paddingRight: "30px" }}
        >
          <div className="row">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Product Name
              </label>
              <input
                className="form-control"
                type="text"
                name="product_name"
                placeholder="ex : Fish Investment"
                value={formData.product_name}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Description
              </label>
              <input
                className="form-control"
                type="text"
                name="desc"
                placeholder="Tell everyone about your product"
                value={formData.desc}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Location
              </label>
              <input
                className="form-control"
                type="text"
                name="location"
                placeholder="ex : Jl. Samudera, Padang, Indonesia"
                value={formData.location}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Lebar Kolam (ha)
              </label>
              <input
                className="form-control"
                type="decimal"
                name="ponds_wide"
                placeholder={1}
                value={formData.ponds_wide}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Kapasitas Produksi (kg)
              </label>
              <input
                className="form-control"
                type="decimal"
                name="production_capacity"
                placeholder={30.0}
                value={formData.production_capacity}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Biaya Pakan
              </label>
              <input
                className="form-control"
                type="decimal"
                name="feed_cost"
                placeholder={1000000}
                value={formData.feed_cost}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Biaya Pekerja
              </label>
              <input
                className="form-control"
                type="decimal"
                name="worker_cost"
                placeholder={1000000}
                value={formData.worker_cost}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Biaya Perawatan
              </label>
              <input
                className="form-control"
                type="decimal"
                name="maintenance_cost"
                placeholder={1000000}
                value={formData.maintenance_cost}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Harga Jual Hasil Produk
              </label>
              <input
                className="form-control"
                type="decimal"
                name="selling_price"
                placeholder={1000000}
                value={formData.selling_price}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Funds Managed
              </label>
              <input
                className="form-control"
                type="decimal"
                name="funds_managed"
                placeholder={80000}
                value={formData.funds_managed}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Estimasi Pendapatan
              </label>
              <input
                className="form-control"
                type="decimal"
                name="estimated_income"
                placeholder={800000}
                value={formData.estimated_income}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Margin
              </label>
              <input
                className="form-control"
                type="decimal"
                name="margin"
                placeholder={80000}
                value={formData.margin}
                onChange={handleInputChange}
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="kategori" className="form-label">
                Category
              </label>
              <select
                className="form-select form-select-sm mb-3"
                name="category_id"
                value={formData.category_id}
                onChange={handleInputChange}
                aria-label="Small select example"
              >
                <option value="">Pilih Kategori</option>
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.category} {/* Pastikan nama field di API sesuai */}
                    </option>
                  ))
                ) : (
                  <option value="">No categories available</option>
                )}
              </select>

            </div>

            <div className="mb-3">
              <label htmlFor="foto" className="form-label">
                Product Picture
              </label>
              <input
                className="form-control"
                type="file"
                id="foto"
                name="product_pict"
                onChange={handleFileChange}
              />
            </div>
            <div className="col-12 mb-3">
              <button className="btn btn-primary" type="submit">Submit Data</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

AddData.propTypes = {
  handleCloseModal: PropTypes.func.isRequired, // Ensures handleCloseModal is a required function
};

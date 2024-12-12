import { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";

export const AddData = () => {
  const [categories, setCategories] = useState([]);

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
          //   action="{{ route('admin.store') }}"
          //   method="POST"
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
                name="nama_barang"
                placeholder="ex : Fish Investment"
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
                name="deskripsi"
                placeholder="Tell everyone about your product"
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
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Qty
              </label>
              <input
                className="form-control"
                type="number"
                name="qty"
                placeholder={20}
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
                aria-label="Small select example"
              >
                <option value="">Pilih Kategori</option>
                {categories.length > 0 ? (
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category} {/* Ganti 'name' dengan field yang sesuai di API */}
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
                name="foto"
              />
            </div>
            <div className="col-12 mb-3">
              <button className="btn btn-primary">Submit Data</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

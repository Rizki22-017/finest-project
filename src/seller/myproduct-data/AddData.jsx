import { useEffect } from "react";
import AOS from "aos";
export const AddData = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
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
                Funds Managed
              </label>
              <input
                className="form-control"
                type="decimal"
                name="promo"
                placeholder={80000}
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
                name="harga"
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
                <option value="1">Sea Product</option>
                <option value="2">Non-Sea Product</option>
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

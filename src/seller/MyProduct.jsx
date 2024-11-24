export const MyProduct = () => {
  return (
    <>
      <section className="myproduct section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>My Product</h2>
        </div>
        {/* End Section Title */}
        <div className="col-12" id="databarang" data-aos="fade-up" data-aos-delay={100}>
          <div
            className="card recent-sales overflow-auto"
            style={{ margin: "3rem" }}
          >
            <div className="card-body border" style={{ borderRadius: 10 }}>
              <div className="row d-flex justify-content-between align-items-center mb-3">
                {/* Judul Card di Sebelah Kiri */}
                <div className="col-auto">
                  <h3 className="card-title mb-0" style={{ marginTop: "30px" }}>
                    <b>Product Data</b>
                  </h3>
                </div>
                {/* Filter dan Tombol di Sebelah Kanan */}
                <div className="col-auto d-flex align-items-center">
                  {/* Tombol Masukan Data Baru */}
                  <a
                    className="btn btn-success"
                    href="#"
                    style={{ marginTop: "30px" }}
                  >
                    Add data
                  </a>
                </div>
              </div>
              {/* Tabel User */}
              <table className="table table-striped table-bordered text-center">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Fund Managed</th>
                    <th scope="col">Margin</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Category</th>
                    <th scope="col" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Shrimp</td>
                    <td>Rp.30.000.000</td>
                    <td>Rp.2.500.000</td>
                    <td>30</td>
                    <td>Shrimp</td>
                    <td className="text-center">
                      <form
                        action="#"
                        method="POST"
                        className="d-flex justify-content-center gap-2"
                      >
                        <a className="btn btn-info" href="#">
                          View
                        </a>
                        <a className="btn btn-primary" href="#">
                          Edit
                        </a>
                        <a className="btn btn-danger" href="#">
                          Delete
                        </a>
                        {/* <button type="submit" className="btn btn-danger">
                          Delete
                        </button> */}
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Fish</td>
                    <td>Rp.30.000.000</td>
                    <td>Rp.2.500.000</td>
                    <td>30</td>
                    <td>Sea Product</td>
                    <td className="text-center">
                      <form
                        action="#"
                        method="POST"
                        className="d-flex justify-content-center gap-2"
                      >
                        <a className="btn btn-info" href="#">
                          View
                        </a>
                        <a className="btn btn-primary" href="#">
                          Edit
                        </a>
                        <a className="btn btn-danger" href="#">
                          Delete
                        </a>
                        {/* <button type="submit" className="btn btn-danger">
                          Delete
                        </button> */}
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Payment = () => {
    return (
      <>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h2
                className="modal-title text-center w-100"
                id="paymentModalLabel"
              >
                Payment Details
              </h2>
            </div>
            <div className="modal-body">
              <p className="text-center mb-3">
                How much do you want to invest today?
              </p>
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control text-center fs-5"
                  placeholder="Rp 500.000 ,00"
                  aria-label="Investment amount"
                  style={{ borderRadius: "10px", fontWeight: "500" }}
                />
              </div>
  
              <div className="row mb-4">
                {/* Kolom Nama Data */}
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <h6>Your Details</h6>
                  <p>Name</p>
                  <p>Email</p>
                  <p>Mobile Number</p>
                  <p>Company</p>
                </div>
  
                {/* Kolom Isi Data */}
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <h6>&nbsp;</h6>{" "}
                  {/* Kosong untuk menjaga jarak agar terlihat rapi */}
                  <p>John Doe</p>
                  <p>johndoe123@gmail.com</p>
                  <p>0812-3456-7890</p>
                  <p>Marina Fresh</p>
                </div>
  
                {/* Kolom Metode Pembayaran */}
                <div className="col-12 col-md-4 text-md-end">
                  <h6>How would you like to pay to?</h6>
                  <button
                    className="btn btn-outline-primary w-100 mb-2"
                    style={{ borderRadius: "20px" }}
                  >
                    E-Wallet
                  </button>
                  <button
                    className="btn btn-outline-primary w-100 mb-2"
                    style={{ borderRadius: "20px" }}
                  >
                    Direct Debit
                  </button>
                  <button
                    className="btn btn-outline-primary w-100"
                    style={{ borderRadius: "20px" }}
                  >
                    Mobile Banking
                  </button>
                </div>
              </div>
  
              <div className="d-flex justify-content-between align-items-center">
                <h6>Total Due</h6>
                <h6 className="fw-bold">Rp 500.000 ,00</h6>
              </div>
            </div>
  
            <div className="modal-footer border-0 d-flex justify-content-center flex-wrap">
              <button
                type="button"
                className="btn btn-primary px-5 py-2 mb-2 mb-md-0 mx-2"
                style={{ borderRadius: "10px" }}
              >
                Pay Now
              </button>
              <button
                type="button"
                className="btn btn-secondary mx-2"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
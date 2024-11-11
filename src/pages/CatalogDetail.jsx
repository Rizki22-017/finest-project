import { FinancialStatement } from "./ToogleCatalogDetail/FinancialStatement";
import { Information } from "./ToogleCatalogDetail/Information";
import { Payment } from "./Payment";
import { Refund } from "./ToogleCatalogDetail/Refund";

export const CatalogDetail = () => {
  return (
    <>
      <section id="catdet" className="catdet section">
        <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative">
          <img
            src="assets/img/udang.png"
            className="img-fluid animated"
            alt=""
          />
          <h1>Shrimp</h1>
          <h3>
            Marina Fresh <br />
            45, Merdeka Street - Palembang
          </h3>
          <p>
            Fresh prawns harvested directly from sustainable farms. Suitable for
            a variety of dishes and rich in essential nutrients.
          </p>
        </div>
      </section>

      <section id="tab-detail" className="tab-detail section">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-12">
              {/* Tabs */}
              <ul className="nav nav-pills mb-3" role="tablist">
                <li>
                  <a
                    className="nav-link active"
                    data-bs-toggle="pill"
                    href="#about-tab1"
                    aria-selected="true"
                    role="tab"
                  >
                    <b>Information</b>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-bs-toggle="pill"
                    href="#about-tab2"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                  >
                    <b>Financial Statements</b>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-bs-toggle="pill"
                    href="#about-tab3"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                  >
                    <b>Refund</b>
                  </a>
                </li>
              </ul>
              {/* End Tabs */}
              {/* Tab Content */}
              <div className="tab-content">
                <Information/>
                {/* End Tab 1 Content */}
                <FinancialStatement/>
                {/* End Tab 2 Content */}
                <Refund/>
                {/* End Tab 3 Content */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="desc" className="desc section">
        <>
          <div className="container">
            <div className="row gy-3">
              <div className="col-lg-12 d-flex flex-column justify-content-center">
                <div className="desc-content ps-0 ps-lg-3">
                  <h3>Description</h3>
                  <p className="fst-italic">
                    Our fresh prawns are harvested directly from sustainable
                    farms and are quality guaranteed. These prawns have a soft
                    texture and naturally sweet flavour, suitable for a variety
                    of dishes. We ensure a safe packaging process to maintain
                    the freshness and nutrition of the prawns until they reach
                    you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
      <section id="button-trigger" className="button-trigger container">
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Pay Now
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  
                  <div className="modal-body"><Payment/></div>
                  
                </div>
              </div>
            </div>
          </section>
        </>
      </section>
    </>
  );
};

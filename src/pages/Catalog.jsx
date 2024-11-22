import { useEffect } from "react";
import AOS from "aos";

export const Catalog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">
        {/* Section Title */}
        <div className="page-title" data-aos="zoom-out">
            <div className="container position-relative">
                <h1>Catalog Product</h1>
                <p>
                Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
                placeat quibusdam quia assumenda numquam molestias.
                </p>
                <nav className="breadcrumbs">
                <ol>
                    <li>
                    <a href="/">Home</a>
                    </li>
                    <li className="current">Catalog Product</li>
                </ol>
                </nav>
            </div>
        </div>
        {/* End Section Title */}
        <div className="container">
            <form className="search-form d-flex flex-grow-1" role="search" style={{marginBottom: '25px'}} data-aos="fade-up">
                <div className="input-group search-input-group">
                    <span className="input-group-text search-icon">
                    <i className="bi bi-search" />
                    </span>
                    <input
                    className="form-control roboto-font search-input"
                    type="search"
                    placeholder="Marina Fresh"
                    aria-label="Search"
                    />
                </div>
            </form>
          <div className="row gy-4" data-aos="fade-up">
            {/* Portfolio Item */}
            <div className="col-lg-3 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <a
                  href="/catalog-detail"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img
                    src="assets/img/portfolio/app-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="portfolio-info">
                  <h4>
                    <a href="/catalog-detail" title="More Details">
                      App 1
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <p style={{marginTop: '5px'}}><i className="fa-solid fa-star"/> 4.5</p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-3 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <a
                  href="/catalog-detail"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img
                    src="assets/img/portfolio/product-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="portfolio-info">
                  <h4>
                    <a href="/catalog-detail" title="More Details">
                      Product 1
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <p style={{marginTop: '5px'}}><i className="fa-solid fa-star"/> 4.5</p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-3 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <a
                  href="/catalog-detail"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img
                    src="assets/img/portfolio/branding-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="portfolio-info">
                  <h4>
                    <a href="/catalog-detail" title="More Details">
                      Branding 1
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <p style={{marginTop: '5px'}}><i className="fa-solid fa-star"/> 4.5</p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-3 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <a
                  href="/catalog-detail"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img
                    src="assets/img/portfolio/branding-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="portfolio-info">
                  <h4>
                    <a href="/catalog-detail" title="More Details">
                      Branding 1
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <p style={{marginTop: '5px'}}><i className="fa-solid fa-star"/> 4.5</p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            {/* Add more portfolio items similarly */}
          </div>
        </div>
      </section>
      {/* /Portfolio Section */}
    </>
  );
};

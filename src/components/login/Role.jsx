import { useEffect } from "react";
import AOS from "aos";

export const Role = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <section id="services" className="services section ">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Choose Role Account</h2>
          
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="service-item item-cyan position-relative">
                
                <div>
                  <h3>Investor</h3>
                  <i className="fa-solid fa-chart-line icon" />
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="service-item item-orange position-relative">
                
                <div>
                  <h3>Fish Farmers</h3>
                  <i className="fa-solid fa-fish icon" />
                </div>
              </div>
            </div>
            {/* End Service Item */}
            
          </div>
        </div>
      </section>
      {/* /Services Section */}
    </>
  );
};

import React, {  } from "react";

function footer() {
  return (
    <>
          	{/* Start Footer Section */}
<footer className="footer-section">
  <div className="container relative">
    <div className="sofa-img">
      <img src="images/sofa.png" alt="Image" className="img-fluid" />
    </div>
    <div className="row">
      <div className="col-lg-8">
        <div className="subscription-form">
          <h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Image" className="img-fluid" /></span><span>Inscrivez-vous à la newsletter</span></h3>
          <form action="#" className="row g-3">
            <div className="col-auto">
              <input type="text" className="form-control" placeholder="Entrez votre nom" />
            </div>
            <div className="col-auto">
              <input type="email" className="form-control" placeholder="Entrez votre email" />
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">
                <span className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="row g-5 mb-5">
      <div className="col-lg-4">
        <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Parfum<span>.</span></a></div>
        <p className="mb-4">Découvrez une sélection exquise de fragrances luxueuses qui captivent les sens et inspirent l'élégance.</p>
        <ul className="list-unstyled custom-social">
          <li><a href="#"><span className="fa fa-brands fa-facebook-f" /></a></li>
          <li><a href="#"><span className="fa fa-brands fa-twitter" /></a></li>
          <li><a href="#"><span className="fa fa-brands fa-instagram" /></a></li>
          <li><a href="#"><span className="fa fa-brands fa-linkedin" /></a></li>
        </ul>
      </div>
      <div className="col-lg-8">
        <div className="row links-wrap">
          <div className="col-6 col-sm-6 col-md-3">
            <ul className="list-unstyled">
              <li><a href="#">À propos de nous</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <ul className="list-unstyled">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contactez-nous</a></li>
            </ul>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <ul className="list-unstyled">
              <li><a href="#">Assistance</a></li>
              <li><a href="#">Chat en direct</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* End Footer Section */}
 
    </>
  );
}

export default footer;

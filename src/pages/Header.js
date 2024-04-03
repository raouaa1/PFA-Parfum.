import React, {  } from "react";

function Header() {
  return (
    <>
{/* Start Header/Navigation */}
<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
  <div className="container">
    <a className="navbar-brand" href="index.html">Parfum<span>.</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarsFurni">
      <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <a className="nav-link" href="index.html">Accueil</a>
        </li>
        <li><a className="nav-link" href="public/Projet/shop.html">Boutique</a></li>
        <li><a className="nav-link" href="public/about.html">À propos de nous</a></li>
        <li><a className="nav-link" href="public/contact.html">Contactez-nous</a></li>
      </ul>
      <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
        <li><a className="nav-link" href="Enreg/public/pages-Inscrire.html"><img src="images/user.svg" alt="Description" /></a></li>
        <li><a className="nav-link" href="public/cart.html"><img src="images/cart.svg" alt="Descriptio" /></a></li>
      </ul>
    </div>
  </div>
</nav>
{/* End Header/Navigation */}


    </>
  );
}

export default Header;

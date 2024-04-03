import React from "react";


function Homee() {
return(
<>

<div>

  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-12">
          <div className="intro-excerpt">
            <h1>Exclusivités <span clsas="d-block"> Web.Parfum	</span></h1>
            <p className="mb-4">Découvrez nos coffrets parfum, Coffrets maquillage ou Coffrets soin, pour shopper le cadeau qui fera plaisir à coup sûr! Découvrez une sélection des grandes marques de beauté : Allant de A Armani à Y comme Yves Saint Laurent, en passant par Burberry, Chloé, Dolce&amp;Gabbana, Hermès, Lancôme. Elles sont toutes là !</p>
            <p><a href className="btn btn-secondary me-2"> Acheter </a><a href="#" className="btn btn-white-outline"> Explorer </a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Hero Section */}
  {/* Start Product Section */}
  <div className="product-section">
    <div className="container">
      <div className="row">
        {/* Start Column 1 */}
        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
          <h2 className="mb-4 section-title">Fabriqué avec un excellent parfum.</h2>
          <p className="mb-4">Découvrez une sélection des grandes marques de beauté : Allant de A Armani à Y comme Yves Saint Laurent, en passant par Burberry, Chloé, Dolce&amp;Gabbana, Hermès, Lancôme. Elles sont toutes là ! </p>
          <p><a href="shop.html" className="btn">Explore</a></p>
        </div> 
        {/* End Column 1 */}
        {/* Start Column 2 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a className="product-item" href="cart.html">
            <img src="images/pro1.png" className="img-fluid product-thumbnail" />
            <h3 className="product-title">Dior Fève Délicieuse</h3>
            <strong className="product-price">$120</strong>
            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </a>
        </div> 
        {/* End Column 2 */}
        {/* Start Column 3 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a className="product-item" href="cart.html">
            <img src="images/product2.webp" className="img-fluid product-thumbnail" />
            <h3 className="product-title">DIOR J'ADORE L'OR ESSENCE</h3>
            <strong className="product-price">$180</strong>
            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </a>
        </div>
        {/* End Column 3 */}
        {/* Start Column 4 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a className="product-item" href="cart.html">
            <img src="images/product3.jpg" className="img-fluid product-thumbnail" />
            <h3 className="product-title">Miss Dior</h3>
            <strong className="product-price">$98</strong>
            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </a>
        </div>
        {/* End Column 4 */}
      </div>
    </div>
  </div>
  {/* End Product Section */}
  {/* Start Why Choose Us Section */}
  <div className="why-choose-section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <h2 className="section-title">Pourquoi Nous Choisir</h2>
          <p>Bénéficiez de notre expertise, de notre engagement envers la qualité et de notre service client exceptionnel. Choisissez-nous pour une expérience inégalée.</p>
          <div className="row my-5">
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img src="images/truck.svg" alt="Image" className="imf-fluid" />
                </div>
                <h3> Livraison &amp; rapide et gratuite</h3>
                <p>Profitez d'une livraison rapide et gratuite pour recevoir vos produits sans attendre !</p>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img src="images/bag.svg" alt="Image" className="imf-fluid" />
                </div>
                <h3>Facilité de shopping</h3>
                <p>Explorez notre site et profitez de la facilité de shopping pour trouver tout ce dont vous avez besoin en quelques clics seulement.</p>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img src="images/support.svg" alt="Image" className="imf-fluid" />
                </div>
                <h3>24/7 Assistance</h3>
                <p>Notre équipe est disponible 24/7 pour vous offrir une assistance à tout moment, que ce soit pour répondre à vos questions ou résoudre vos problèmes.</p>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img src="images/return.svg" alt="Image" className="imf-fluid" />
                </div>
                <h3>Retours sans tracas</h3>
                <p>Retournez vos articles sans tracas avec notre processus de retour simple et efficace, pour une expérience d'achat sans soucis.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="img-wrap">
            <img src="images/chose.avif" alt="Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Why Choose Us Section */}
  {/* Start We Help Section */}
  <div className="we-help-section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-7 mb-5 mb-lg-0">
          <div className="imgs-grid">
            <div className="grid grid-1"><img src="images/img1.webp" alt="Untree.co" /></div>
            <div className="grid grid-2"><img src="images/img4.avif" alt="Untree.co" /></div>
            <div className="grid grid-3"><img src="images/img3.jpg" alt="Untree.co" /></div>
          </div>
        </div>
        <div className="col-lg-5 ps-lg-5">
          <h2 className="section-title mb-4">Nous vous aidons à choisir le meilleur parfum moderne</h2>
          <p>Nous sommes là pour vous aider à trouver le parfum moderne parfait qui vous correspond</p>
          <ul className="list-unstyled custom-list my-4">
            <li>Un service client dédié pour répondre à toutes vos questions</li>
            <li>Des conseils personnalisés pour trouver le parfum qui reflète votre style</li>
            <li>Des descriptions détaillées des caractéristiques de chaque parfum</li>
            <li>Des échantillons gratuits pour vous permettre de tester les parfums</li>
          </ul>
          <p><a herf="#" className="btn">Explore</a></p>
        </div>
      </div>
    </div>
  </div>
  {/* End We Help Section */}
  {/* Start Popular Product */}
  <div className="popular-product">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <img src="images/img6.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="pt-3">
              <h3>Coco Chanel</h3>
              <p>Symbole de l'élégance intemporelle, Coco Chanel a révolutionné l'industrie de la mode </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <img src="images/img7.webp" alt="Image" className="img-fluid" />
            </div>
            <div className="pt-3">
              <h3>DIOR J'ADORE</h3>
              <p>Portez Dior J'adore et incarnez l'essence même de la sophistication et de la féminité </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <img src="images/pro3.png" alt="Image" className="img-fluid" />
            </div>
            <div className="pt-3">
              <h3>Dior Oud Ispahan</h3>
              <p>Imprégnez-vous de l'essence envoûtante et mystérieuse de Dior Oud Ispahan </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Popular Product */}
  {/* Start Blog Section */}
  <div className="blog-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="section-title">Parfum récent</h2>
        </div>
        <div className="col-md-6 text-start text-md-end">
          <a href="#" className="more">Afficher tous les articles</a>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
          <div className="post-entry">
            <a href="#" className="post-thumbnail"><img src="images/p.webp" alt="Image" className="img-fluid" /></a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
          <div className="post-entry">
            <a href="#" className="post-thumbnail"><img src="images/p3.webp" alt="Image" className="img-fluid" /></a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
          <div className="post-entry">
            <a href="#" className="post-thumbnail"><img src="images/parfum.jpg" alt="Image" className="img-fluid" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Blog Section */}
</div>


        </>
        );
        
    }


export default Homee;
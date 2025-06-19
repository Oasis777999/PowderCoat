import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Industrial Coating Systems',
    description: 'High-volume powder coating systems designed for continuous operation in manufacturing environments. Ideal for automotive, aerospace, and large-scale metal fabrication.',
    imgUrl: 'https://reliantfinishingsystems.com/wp-content/uploads/2023/07/Auto-Line-Arial-View.jpg',
    link: '#',
  },
  {
    title: 'Manual Coating Equipment',
    description: 'Precision hand-held coating tools for smaller production runs and custom applications. Offers flexibility and control for high-quality finish.',
    imgUrl: 'https://www.eastmancuts.com/wp-content/uploads/2015/01/blue-streak.png',
    link: '#',
  },
  {
    title: 'Automatic Coating Systems',
    description: 'Fully automated powder coating lines for fast, consistent, and efficient processing of components with minimal human intervention.',
    imgUrl: 'https://kevin.in/wp-content/uploads/2024/04/11-1024x641.png',
    link: '#',
  },
  {
    title: 'Eco-Friendly Coating Solutions',
    description: 'Sustainable coatings with low VOCs, ideal for environmentally conscious manufacturers seeking green certifications.',
    imgUrl: 'https://www.greyb.com/wp-content/uploads/2024/06/Sustainable-Coatings.jpg',
    link: '#',
  },
  {
    title: 'Custom Powder Formulations',
    description: 'Tailored powder coating materials for specific color, texture, or performance characteristics such as UV resistance or heat tolerance.',
    imgUrl: 'https://images.squarespace-cdn.com/content/v1/5a4143b0bff200cbd52bab6d/1539261674222-BY1GSH9BRVMXFGH5LA55/IMG_0388.JPG',
    link: '#',
  },
  {
    title: 'Coating Booths & Ovens',
    description: 'Energy-efficient powder coating booths and curing ovens, available in modular and large-scale configurations.',
    imgUrl: 'https://www.sbimachines.com/images/product/automobile-paint-booth.jpg',
    link: '#',
  },
];

export const Products = () => {
  return (
    <>
    {/* Product Section */}
      <section className="py-5 bg-light text-justify">
        <div className="container-fluid fs-4">
          <h1 className="fw-bold text-gold mb-3">Our Product Range</h1>
          <p className="text-muted mb-5">
            Discover our comprehensive range of powder coating solutions designed to meet the needs of diverse industries — from high-volume manufacturers to precision engineering labs.
          </p>
          <div className="row g-4 text-justify">
            {products.map((product, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow animate-image m-3">
                  <img
                    src={product.imgUrl}
                    alt={product.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-start">
                    <h3 className="text-gold fw-semibold">{product.title}</h3>
                    <p className="text-muted text-justify">{product.description}</p>
                    <a href={product.link} className="text-decoration-none fw-medium"></a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-5">
          <a href="#all-products" className="btn btn-primary px-4 fw-bold">
            View All Products
          </a>
        </div> */}
        </div>
      </section>

      {/* Contact Us : Ready to Upgrade */}
      <section className="bg-darkGold text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold text-dark mb-3">Ready to Upgrade Your Coating Process?</h2>
          <p className="lead mb-4 text-light">
            Contact our team of experts today to find the perfect powder coating solution for your specific needs.
          </p>
          <Link to="/contactus" className="btn bg-gold text-white fw-bold px-4 py-2">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}

import React from 'react';

const galleryData = 
  [
    {
      "image": "https://www.gdasindustries.com/wp-content/uploads/2020/01/Powder-coating-1.jpg",
      "title": "Epoxy Powder Coating"
    },
    {
      "image": "https://www.shapesbyhydro.com/globalassets/shapes/material-properties/powder-coating-of-aluminium.jpg",
      "title": "Polyester Powder Coating"
    },
    {
      "image": "https://vertik-al.com/wp-content/uploads/2023/06/H-Line-mill-to-coat-scaled-e1685710571897.jpg",
      "title": "Super Durable Polyester"
    },
    {
      "image": "https://www.newcore.net.in/wp-content/uploads/2017/10/Powder-coated-Aluminum-Tube3.jpg",
      "title": "Epoxy-Polyester Hybrid"
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgBhIdPuC76vHdDDeSkqoCtmphAJ4Y2TQdg&s",
      "title": "Fluoropolymer Coating"
    },
    {
      "image": "https://2.wlimg.com/product_images/bc-full/2023/9/11787341/epoxy-coating-ms-pipe-1683036129-6860530.jpeg",
      "title": "Epoxy Powder Coating"
    },
    {
      "image": "https://liningcoating.com/wp-content/uploads/2023/09/Fluoropolymer-Coated-SS-DUCT.jpg",
      "title": "Fluoropolymer Coating"
    },
    {
      "image": "https://www.rapiddirect.com/wp-content/uploads/2022/04/copper-plated-parts.jpg",
      "title": "Metallic Powder Coating"
    },
    {
      "image": "https://www.ameteksurfacevision.com/-/media/ameteksurfacevisionv2/images-sv/industries/aluminum/aluminum_coating.png?la=en&revision=dc0b0c43-a43c-48d7-98e1-b09197960021&hash=FD0C86AAB350E2075FDD45CF6D52FCD0",
      "title": "Polyester Powder Coating"
    },
    {
      "image": "https://www.minitoolscoating.com/wp-content/uploads/2018/07/rivestimento-GearCut.jpg",
      "title": "Epoxy Powder Coating"
    }
  ]
  


export const Projects = () => {
  return (
    <div className="container-fluid bg-light my-5">
      <div className="row g-4">
        {galleryData.map((item, index) => (
          <div className="col-sm-6 col-lg-6" key={index}>
            <div className="position-relative overflow-hidden m-2">
              <img
                src={item.image}
                className="img-fluid img-height w-100"
                alt={`Project ${index + 1}`}
              />
              <div className="position-absolute bottom-0 start-0 text-light p-3 bg-opacity-50 w-100">
                <h3>{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

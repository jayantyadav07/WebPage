import React from 'react';
import img from "../assest/BTI Solutions.png"
import img1 from "../assest/CERATIZIT.jpeg"
import img2 from "../assest/Computer Express - DotNet.jpg"
import img3 from "../assest/ittanta-logo-new.png"
import img4 from "../assest/JoyDrop - Shopify.png"
import img5 from "../assest/Lemore Beauty - Shopify.png"
import img6 from "../assest/LTIMindtree.jpg"
import img7 from "../assest/Plansee.webp"
const Clients = () => {
  const clientLogos = [
  img,img1,img2,img3,img4,img5,img6,img7
  ]

  return (
    <div className="section">
      <h2>Clients</h2>
      <div className="client-logos">
        {clientLogos.map((logo, index) => (
          <img src={logo} alt={`Client ${index + 1}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Clients;

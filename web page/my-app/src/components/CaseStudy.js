import React from 'react';
import img from "../assest/ittanta-logo-new.png"
const CaseStudy = () => {
  return (
    <div className="section case-study">
      <h2>Case Study</h2>
      <p>
        <strong>What is ITTANTAbot?</strong>
        <br />
        A state-of-the-art smart robot driven by IoT, AI, ML, and RPA technologies. Designed to automate tasks traditionally handled by humans.
        <br />
        From delivering food in a restaurant to automating the handling of patient samples in healthcare labs, and much more...
      </p>
      <img src={img} alt="Case Study" />
    </div>
  );
};

export default CaseStudy;

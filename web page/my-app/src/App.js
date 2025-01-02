import React from 'react';
import Clients from './components/Clients';
import Services from './components/Services';
import CaseStudy from './components/CaseStudy';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="container">
      <Clients />
      <Services />
      <CaseStudy />
      <ContactForm />
    </div>
  );
}

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from '../../components';
import {ReactComponent as NasiKari} from "../../assets/Nasi-Kari.svg";
import './HomePage.scss';

function HomePage() {
  /** Redirection */
  const navigate = useNavigate();

  const handleRedirect = (e) => {
    switch (e.target.id) {
      case 'menu-button':
        navigate('/menu');
        break;
      case 'contact-us-button':
        navigate('/contact-us');
        break;
      default:
        navigate('/');
        break;
    }
  };

  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <div className="home__body__container-left">
          <h1>Nasi Kari</h1>
          <h1>Apek Loso</h1>
          <p>Curry rice from Tanjung Balai Karimun, mixed with braised meats</p>
          <div className="home__body__container-left__buttons">
            <button id="menu-button" onClick={handleRedirect}>Menu</button>
            <button id="contact-us-button" onClick={handleRedirect}>Contact Us</button>
          </div>
        </div>
        <NasiKari className="home__body__container-right" />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
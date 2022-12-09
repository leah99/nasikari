import React from 'react';
import { Header, Footer } from '../../components';
import {ReactComponent as Location} from "../../assets/Location.svg";
import {ReactComponent as Phone} from "../../assets/Phone.svg";
import {ReactComponent as Email} from "../../assets/Email.svg";
import {ReactComponent as Open} from "../../assets/Open-Sign.svg";
import './ContactPage.scss';

function ContactPage() {
  return (
    <div className="contact">
      <Header />
      <h1>Contact</h1>
      <div className="contact__container">
        <div className="contact__container__div">
          <Location className="contact__container__div__icon" />
          <a href="https://www.google.com/maps?q=Baloi+Mas+Garden+Blok+E+12,+Batam,+Indonesia,+Riau+Islands+Province&rlz=1C1CHBF_enSG885SG885&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi6wY6asu37AhXfIrcAHUHrAusQ_AUoAXoECAEQAw">Baloi Mas Garden Blok E 12, Batam, Indonesia, Riau Islands Province</a>
        </div>
        <div className="contact__container__div">
          <Phone className="contact__container__div__icon" />
          <a href="tel: +62 812-7015-0422">+62 812-7015-0422</a>
        </div>
        <div className="contact__container__div">
          <Email className="contact__container__div__icon" />
          <a href="mailto: apeklosonasikari@gmail.com">apeklosonasikari@gmail.com</a>
        </div>
        <div className="contact__container__div">
          <Open className="contact__container__div__icon" />
          <h4>Buka Setiap Selasa, Rabu , Jumat dan Minggue</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
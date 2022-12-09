import React from 'react';
import {ReactComponent as Copyright} from "../../assets/Copyright.svg";
import {ReactComponent as Facebook} from "../../assets/Facebook.svg";
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <Copyright />
            <h4 className="footer__description">Nasikari Apek Loso Balai</h4>
            <a className="footer__icon" href="https://www.facebook.com/apeklosocurryricebalai">
                <Facebook className="footer__icon__facebook" />
            </a>
        </div>
    )
}

export default Footer
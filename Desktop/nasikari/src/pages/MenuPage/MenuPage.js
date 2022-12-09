import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuList } from '../../components';
import {ReactComponent as Return} from "../../assets/Return.svg";
import './MenuPage.scss';

function MenuPage() {
  /** Redirection */
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className="menu">
      <div className="menu__header">
        <Return className="menu__header__icon" onClick={handleRedirect} />
        <h1>Menu</h1>
      </div>
      <MenuList
        title="Nasikari Biasa Ayam Goreng"
        description="Nasi Putih Biasa, 1/2 Telur Kecap, Daging Babi Kecap,Tahu Kecap, Kentang Kari, Ayam Goreng Serta Cabe Rawit Belecan"
        price="Rp 23.000"
      />
      <MenuList
        title="Nasikari Jumbo Ayam Goreng"
        description="Nasi Putih Jumbo, 1/2 Telur Kecap, Daging Babi Kecap,Tahu Kecap, Kentang Kari, Ayam Goreng Serta Cabe Rawit Belecan"
        price="Rp 25.000"
      />
      <MenuList
        title="Ayam Goreng"
        description="Honey Ayam Goreng, tidak beserta Cabe Rawit Belacan"
        price="Rp 8.000"
      />
      <MenuList
        title="Es Nenas"
        description="Homemade, Tanpa Pengawet"
        price="Rp 5.000"
      />
      <MenuList
        title="Teh Pucuk Harum"
        description="350ml"
        price="Rp 5.000"
      />
    </div>
  );
}

export default MenuPage;
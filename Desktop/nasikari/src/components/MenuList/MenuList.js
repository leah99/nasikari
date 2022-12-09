import React from 'react';
import PropTypes from 'prop-types';
import "./MenuList.scss";
  
const MenuList = ({title, description, price}) => {
    return (
        <div className="menu-list">
            <div className="menu-list__container-left">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <h3 className="menu-list__container-right">{price}</h3>
        </div>
	);
};

MenuList.propTypes = {
	/** Title of item */
	title: PropTypes.string,

	/** Description of item */
	description: PropTypes.string,

    /** Price of item */
    price: PropTypes.string,
};

MenuList.defaultProps = {
	title: "Nasikari Biasa Ayam Goreng",
	description: "Nasi Putih Biasa, 1/2 Telur Kecap, Daging Babi Kecap,Tahu Kecap, Kentang Kari, Ayam Goreng Serta Cabe Rawit Belecan",
    price: "Rp 23.000",
};

export default MenuList;
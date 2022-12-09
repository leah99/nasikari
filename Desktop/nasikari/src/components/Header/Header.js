import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/Logo.svg";
import './Header.scss';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [hamburger, setHamburger] = useState(true);

    const handleClick = () => setOpen(!open);
    const closeMobileMenu = () => setOpen(false);

    const showHamburger = () => {
        if(window.innerWidth <= 960) {
            setHamburger(true);
        } else {
            setHamburger(false)
        }
    }

    /* Hides hamburger button even after refresh */
    useEffect(() => {
        showHamburger()
    }, [])

    window.addEventListener('resize', showHamburger);

    /** Disable scrolling when menu is opened */
    useEffect(() => {
        if(open === true) {
            document.documentElement.style.overflow = 'hidden';
            document.body.scroll = "no";
        }
        else {
            document.documentElement.style.overflow = 'scroll';
            document.body.scroll = "yes";
        }
    }, [open])


    /** Close menu when click is detected outside */
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const handleClickOutside = useCallback(
        (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) &&!hamburgerRef.current.contains(event.target)) {
                setOpen(false);
            }
        }, [setOpen]
    );
    
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [handleClickOutside]);

    /** Disappearing header on scroll */
    function useScrollDirection() {
        const [scrollDirection, setScrollDirection] = useState(null);
      
        useEffect(() => {
            let lastScrollY = window.pageYOffset;
      
            const updateScrollDirection = () => {
                const scrollY = window.pageYOffset;
                const direction = scrollY > lastScrollY ? "down" : "up";
                if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                    setScrollDirection(direction);
                }
                lastScrollY = scrollY > 0 ? scrollY : 0;
            };
            window.addEventListener("scroll", updateScrollDirection); // add event listener
            return () => {
                window.removeEventListener("scroll", updateScrollDirection); // clean up
            }
        }, [scrollDirection]);
      
        return scrollDirection;
    };

    const scrollDirection = useScrollDirection();

    /** Redirection */
    const navigate = useNavigate();

    const handleRedirect = (e) => {
        closeMobileMenu();
        switch (e.target.id) {
            case 'logo':
                navigate('/');
                break;
            case 'home':
                navigate('/');
                break;
            case 'menu':
                navigate('/menu');
                break;
            case 'contactUs':
                navigate('/contact-us');
                break;
            default:
                navigate('/');
                break;
        }
    };

    return (
        <nav className={`${scrollDirection === "down" ? "navbar--hide" : "navbar--show"}`}>
            {/* -- Hamburger Icon -- */}
            {hamburger && <div ref={hamburgerRef} className={`${open ? "navbar__hamburger--open" : "navbar__hamburger--close"}`} onClick={handleClick}>
                <span className="navbar__hamburger__bar" />
                <span className="navbar__hamburger__bar" />
                <span className="navbar__hamburger__bar" />
            </div>}

            {/* -- Menu -- */}
            <div className={`${open ? "navbar__menu--open" : "navbar__menu--close"}`}>
                <Logo id={'logo'} className={`${open ? "navbar__menu--open__logo" : "navbar__menu--close__logo"}`} onClick={handleRedirect} />
                <ul ref={menuRef}>
                    <li id={'home'} onClick={handleRedirect}>
                    </li>
                    <li id={'home'} onClick={handleRedirect}>
                        Home
                    </li>
                    <li id={'menu'} onClick={handleRedirect}>
                        Menu
                    </li>
                    <li id={'contactUs'} onClick={handleRedirect}>
                        Contact Us
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
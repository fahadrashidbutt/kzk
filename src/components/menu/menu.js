"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import "./menu.css"
import Image from 'next/image';
import LogoKZK from "../../assets/images/logo/logo.webp"
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/google-my-business", label: "Google My Business" },
    { path: "/contact-us", label: "Contact Us" },
];

const servicesLinks = [
    { path: "/services/web-development", label: "Web Development" },
    { path: "/services/app-development", label: "App Development" },
    { path: "/services/seo", label: "SEO" },
    { path: "/services/digital-marketing", label: "Digital Marketing" },
    { path: "/services/designing", label: "Designing" },
];

const Menu = () => {
    const MenuContainer = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const tl = useRef(null);
    const servicesTl = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setShowServices(false);
        }
    };

    const showServicesMenu = () => {
        servicesTl.current = gsap.timeline();
        servicesTl.current
            .to(".menu-links", {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: "power2.inOut",
            })
            .to(".menu-links", {
                display: "none",
                duration: 0,
            })
            .set(".services-links", {
                display: "block",
            })
            .fromTo(".services-links",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
        setShowServices(true);
    };

    const hideServicesMenu = () => {
        servicesTl.current = gsap.timeline();
        servicesTl.current
            .to(".services-links", {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: "power2.inOut",
            })
            .to(".services-links", {
                display: "none",
                duration: 0,
            })
            .set(".menu-links", {
                display: "block",
            })
            .fromTo(".menu-links",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
        setShowServices(false);
    };

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", { y: 75 });
        gsap.set(".menu-overlay", { visibility: "visible" });
        gsap.set(".services-links", { display: "none" });
        
        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(".menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
            }, "-=0.75");
    }, { scope: MenuContainer });

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
            document.body.style.overflow = 'hidden';
        } else {
            tl.current.reverse();
            document.body.style.overflow = 'unset';
            setTimeout(() => {
                setShowServices(false);
                gsap.set(".menu-links", { display: "block", opacity: 1, y: 0 });
                gsap.set(".services-links", { display: "none" });
            }, 500);
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <div className='menu-container' ref={MenuContainer}>
            <div className='menu-bar'>
                <div className='menu-logo'>
                    <Link href="/">
                        <Image src={LogoKZK} alt='Logo' width={60} height={60} />
                    </Link>
                </div>
                <div className='menu-open' onClick={toggleMenu}>
                    <p>MENU</p>
                </div>
            </div>
            
            <div className='menu-overlay'>
                <div className='menu-overlay-bar'>
                    <div className='menu-logo'>
                        <Link href="/">
                            <Image src={LogoKZK} alt='Logo' width={60} height={60} />
                        </Link>
                    </div>
                    <div className='menu-close' onClick={toggleMenu}>
                        <p>CLOSE</p>
                    </div>
                </div>
                
                <div className='menu-close-icon' onClick={toggleMenu}>
                    <p>✕</p>
                </div>
                
                <div className='menu-copy'>
                    {/* Main Menu Links */}
                    <div className='menu-links'>
                        {menuLinks.map((link, index) => (
                            <div className='menu-link-item' key={index}>
                                <div className='menu-link-item-holder' onClick={toggleMenu}>
                                    <Link href={link.path} className='menu-link'>
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <div className='menu-link-item'>
                            <div className='menu-link-item-holder' onClick={showServicesMenu}>
                                <span className='menu-link services-link'>
                                    Services <span className='arrow-icon'>→</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Services Submenu Links */}
                    <div className='services-links'>
                        <div className='menu-link-item'>
                            <div className='menu-link-item-holder' onClick={hideServicesMenu}>
                                <span className='menu-link back-link'>
                                    ← Back
                                </span>
                            </div>
                        </div>
                        {servicesLinks.map((link, index) => (
                            <div className='menu-link-item' key={index}>
                                <div className='menu-link-item-holder' onClick={toggleMenu}>
                                    <Link href={link.path} className='menu-link'>
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className='menu-info'>
                        <div className='menu-info-col'>
                            <a href='#' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href='#' target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href='#' target="_blank" rel="noopener noreferrer">Google</a>
                        </div>
                        <div className='menu-info-col'>
                            <p>sales@kzkservices.com</p>
                            <p>(443) 529-8897</p>
                        </div>
                    </div>
                </div>
                
                <div className='menu-preview'>
                    <p>View ShowReel →</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
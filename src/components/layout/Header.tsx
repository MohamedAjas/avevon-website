import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { services } from '../../data/services';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
    }, [location.pathname]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <img src="/Avevon_logo.png" alt="Avevon Logo" height="100" style={{ display: 'block' }} />
                </Link>

                <nav className={styles.desktopNav}>
                    <Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}>Home</Link>
                    <Link to="/about" className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}>About</Link>

                    <div
                        className={styles.dropdownContainer}
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                        <Link
                            to="/services"
                            className={`${styles.navLink} ${location.pathname.startsWith('/services') ? styles.active : ''}`}
                        >
                            Services <ChevronDown size={14} className={styles.dropdownIcon} />
                        </Link>

                        <AnimatePresence>
                            {servicesDropdownOpen && (
                                <motion.div
                                    className={styles.dropdownMenu}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {services.map(service => (
                                        <Link
                                            key={service.id}
                                            to={`/services/${service.slug}`}
                                            className={styles.dropdownItem}
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link to="/work" className={`${styles.navLink} ${location.pathname === '/work' ? styles.active : ''}`}>Our Work</Link>
                    <Link to="/clientele" className={`${styles.navLink} ${location.pathname === '/clientele' ? styles.active : ''}`}>Clientele</Link>
                    <Link to="/gallery" className={`${styles.navLink} ${location.pathname === '/gallery' ? styles.active : ''}`}>Gallery</Link>
                    <Link to="/careers" className={`${styles.navLink} ${location.pathname === '/careers' ? styles.active : ''}`}>Careers</Link>
                </nav>

                <div className={styles.actionContainer}>
                    <Link to="/contact" className={styles.ctaButton}>Let's Talk</Link>
                    <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenuOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className={styles.mobileMenuContent}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className={styles.mobileMenuHeader}>
                                <Link to="/" className={styles.logoMobile} onClick={() => setMobileMenuOpen(false)}>
                                    <img src="/Avevon_logo.png" alt="Avevon Logo" height="50" style={{ display: 'block' }} />
                                </Link>
                                <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                                    <X size={24} />
                                </button>
                            </div>
                            <div className={styles.mobileNavLinks}>
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>

                                <div className={styles.mobileDropdown}>
                                    <div className={styles.mobileDropdownHeader} onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}>
                                        <Link to="/services">Services</Link>
                                        <ChevronDown size={18} className={servicesDropdownOpen ? styles.rotated : ''} />
                                    </div>
                                    <AnimatePresence>
                                        {servicesDropdownOpen && (
                                            <motion.div
                                                className={styles.mobileDropdownItems}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                            >
                                                {services.map(s => (
                                                    <Link key={s.id} to={`/services/${s.slug}`}>{s.title}</Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <Link to="/work">Our Work</Link>
                                <Link to="/clientele">Clientele</Link>
                                <Link to="/gallery">Gallery</Link>
                                <Link to="/careers">Careers</Link>
                                <Link to="/contact" className={styles.mobileCTA}>Let's Talk</Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import { services } from '../../data/services';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brandColumn}>
                        <Link to="/" className={styles.logo}>
                            <img src="/Avevon_logo_old.png" alt="Avevon Logo" height="80" style={{ display: 'block' }} />
                        </Link>
                        <p className={styles.brandStatement}>Storytelling that makes waves</p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialIcon} aria-label="Facebook"><FacebookOutlined style={{ fontSize: '20px' }} /></a>
                            <a href="#" className={styles.socialIcon} aria-label="Instagram"><InstagramOutlined style={{ fontSize: '20px' }} /></a>
                            <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><LinkedinOutlined style={{ fontSize: '20px' }} /></a>
                            <a href="#" className={styles.socialIcon} aria-label="Twitter"><TwitterOutlined style={{ fontSize: '20px' }} /></a>
                        </div>
                    </div>

                    <div className={styles.linksGrid}>
                        <div className={styles.linkColumn}>
                            <h3>Navigation</h3>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/work">Our Work</Link>
                            <Link to="/clientele">Clientele</Link>
                            <Link to="/gallery">Gallery</Link>
                            <Link to="/careers">Careers</Link>
                            <Link to="/contact">Contact</Link>
                        </div>

                        <div className={styles.linkColumn}>
                            <h3>Our Services</h3>
                            {services.map(s => (
                                <Link key={s.id} to={`/services/${s.slug}`}>{s.title}</Link>
                            ))}
                        </div>

                        <div className={styles.linkColumn}>
                            <h3>Contact Us</h3>
                            <p>301/2, Galle Road,<br />Colombo 03,<br />Sri Lanka</p>
                            <p className={styles.contactItem}>
                                <a href="mailto:hello@avevon.com">hello@avevon.com</a>
                            </p>
                            <p className={styles.contactItem}>
                                <a href="tel:+94112345678">+94 11 234 5678</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} Avevon Communications. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

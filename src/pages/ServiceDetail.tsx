import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { services } from '../data/services';
import styles from './ServiceDetail.module.css';

const ServiceDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find(s => s.slug === slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return <Navigate to="/not-found" replace />;
    }

    return (
        <div className={styles.detailPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <div className={styles.heroOverlay}></div>
                    <img src={service.image} alt={service.title} className={styles.heroImage} />
                </div>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <Link to="/services" className={styles.backLink}>
                            <ArrowLeft size={16} /> Back to Services
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className={styles.serviceNumber}>{service.number}</span>
                            <h1 className={styles.heroHeadline}>{service.headline}</h1>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.contentGrid}>
                        <div className={styles.mainColumn}>
                            <h2 className={styles.sectionHeading}>Our Capabilities</h2>

                            <ul className={styles.capabilitiesList}>
                                {service.capabilities.map((cap, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                    >
                                        {cap}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.sidebarColumn}>
                            <div className={styles.ctaBox}>
                                <h3 className={styles.ctaHeadline}>{service.cta}</h3>
                                <p className={styles.ctaDesc}>Get in touch with our team of experts to discuss how we can help elevate your brand.</p>
                                <Link to="/contact" className={styles.primaryCTA}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;

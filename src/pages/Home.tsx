import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import styles from './Home.module.css';

const Home: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const heroImages = [
        "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    {heroImages.map((img, index) => (
                        <div
                            key={index}
                            className={styles.heroImageWrapper}
                            style={{ opacity: index === currentImageIndex ? 1 : 0 }}
                        >
                            <img
                                src={img}
                                alt={`Corporate PR agency ${index + 1}`}
                                className={styles.heroImage}
                            />
                        </div>
                    ))}
                    <div className={styles.heroOverlay}></div>
                </div>

                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={styles.heroHeadline}
                        >
                            Storytelling <br /> that makes <span className={styles.italicText}>waves</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className={styles.heroSubheadline}
                        >
                            We combine public relations, digital marketing, advertising, events, and strategic communications to help brands become visibly more influential.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className={styles.heroActions}
                        >
                            <Link to="/services" className={styles.primaryCTA}>
                                Explore Our Services
                            </Link>
                            <Link to="/contact" className={styles.secondaryCTA}>
                                Talk to Us
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Status Quo Section */}
            <section className={styles.statusQuoSection}>
                <div className={styles.container}>
                    <div className={styles.editorialGrid}>
                        <div className={styles.editorialContent}>
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                                className={styles.sectionHeading}
                            >
                                We deviate from the Status Quo
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <p className={styles.leadPara}>
                                    In a world of noise, meaningful visibility requires strategic conviction and creative execution. We are not just a communications agency; we are architects of influence.
                                </p>
                                <p className={styles.bodyPara}>
                                    We believe that standard approaches yield average results. Our strategy focuses on authentic media engagement, premium editorial positioning, and delivering events that are impossible to ignore. From Colombo to the global stage, we craft narratives that resonate.
                                </p>
                                <Link to="/about" className={styles.textLink}>
                                    Discover Our Approach <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            className={styles.editorialImageContainer}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                                alt="Modern corporate workspace"
                                className={styles.editorialImage}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className={styles.servicesPreviewSection}>
                <div className={styles.container}>
                    <div className={styles.servicesHeader}>
                        <h2 className={styles.sectionHeadingLarge}>Our Capabilities</h2>
                    </div>

                    <div className={styles.servicesList}>
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className={styles.serviceRow}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link to={`/services/${service.slug}`} className={styles.serviceRowLink}>
                                    <div className={styles.serviceNumber}>{service.number}</div>
                                    <div className={styles.serviceContent}>
                                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                                        <p className={styles.serviceDescription}>{service.shortDescription}</p>
                                    </div>
                                    <div className={styles.serviceAction}>
                                        <span className={styles.learnMore}>Learn More</span>
                                        <div className={styles.serviceIconWrap}>
                                            <ArrowRight size={20} className={styles.serviceRowIcon} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaHeadline}>Ready to elevate your brand presence?</h2>
                        <Link to="/contact" className={styles.primaryCTA}>Start a Conversation</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

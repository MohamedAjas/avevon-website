import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import styles from './Services.module.css';

const Services: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.servicesPage}>
            {/* Intro Section */}
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <div className={styles.introContent}>
                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Our <span className={styles.italicText}>services</span>
                        </motion.h1>
                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            We provide a comprehensive suite of communication and marketing
                            services to help your organization build visibility, reputation,
                            influence, and meaningful market presence.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <section className={styles.servicesListSection}>
                <div className={styles.container}>
                    <div className={styles.servicesGrid}>
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                className={styles.serviceItem}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className={styles.serviceImageContainer}>
                                    <img src={service.image} alt={service.title} className={styles.serviceImage} />
                                </div>

                                <div className={styles.serviceContent}>
                                    <div className={styles.serviceNumber}>{service.number}</div>
                                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                                    <p className={styles.serviceHeadline}>{service.headline}</p>

                                    <Link to={`/services/${service.slug}`} className={styles.exploreLink}>
                                        Explore Service <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

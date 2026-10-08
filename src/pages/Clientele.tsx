import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Clientele.module.css';

const Clientele: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Client Data
    const clients = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        name: `Client Partner ${i + 1}`,
        image: `/client-${i + 1}.png`
    }));

    return (
        <div className={styles.clientelePage}>
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
                            Our trusted <span className={styles.italicText}>partners</span>
                        </motion.h1>
                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            We collaborate with organizations across diverse sectors, fostering long-term
                            partnerships built on trust, transparency, and consistent results.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Grid Section */}
            <section className={styles.gridSection}>
                <div className={styles.container}>
                    <div className={styles.logoGrid}>
                        {clients.map((client, index) => (
                            <motion.div
                                key={client.id}
                                className={styles.logoCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <div className={styles.logoPlaceholder}>
                                    {/* Decorative shapes or lines could go here */}
                                    <img src={client.image} alt={client.name} className={styles.clientLogoImage} loading="lazy" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className={styles.collaborationSection}>
                <div className={styles.container}>
                    <div className={styles.collabContent}>
                        <motion.h2
                            className={styles.collabTitle}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            A collaborative approach
                        </motion.h2>
                        <motion.p
                            className={styles.collabText}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Our relationships are partnerships. We act as an extension of your own team,
                            deeply integrating with your business objectives to deliver solutions that
                            are strategic, measurable, and highly effective.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link to="/contact" className={styles.primaryCTA}>Join Our Clientele</Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clientele;

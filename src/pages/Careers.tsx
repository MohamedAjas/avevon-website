import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Careers.module.css';

const Careers: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const roles = [
        { title: 'Communications Manager', area: 'Public Relations' },
        { title: 'Senior Event Producer', area: 'Events' },
        { title: 'Digital Strategist', area: 'Digital Marketing' },
        { title: 'Creative Designer', area: 'Creative Work' },
    ];

    return (
        <div className={styles.careersPage}>
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
                            Bring your ideas to <span className={styles.italicText}>us</span>
                        </motion.h1>
                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            We are always on the lookout for bold thinkers, strategic planners,
                            and creative executors. Build a rewarding career in communications,
                            events, and digital marketing.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className={styles.cultureSection}>
                <div className={styles.container}>
                    <div className={styles.cultureGrid}>
                        <motion.div
                            className={styles.cultureText}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className={styles.sectionHeading}>We deviate from the Status Quo</h2>
                            <p className={styles.bodyPara}>
                                A career at Avevon means being part of a team that thrives on creativity and precision.
                                We don't settle for average. We empower our people to take ownership, challenge conventions,
                                and deliver work that makes waves.
                            </p>
                            <p className={styles.bodyPara}>
                                Whether you're crafting a press narrative, producing a large-scale international conference,
                                or driving a digital campaign, you'll be supported by a culture of collaboration and excellence.
                            </p>
                        </motion.div>
                        <div className={styles.cultureImageBlock}>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" alt="Team collaborating" className={styles.cultureImage} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Openings Box */}
            <section className={styles.openingsSection}>
                <div className={styles.container}>
                    <div className={styles.openingsHeader}>
                        <h2 className={styles.sectionHeading}>Join Our Team</h2>
                        <p className={styles.bodyPara}>We frequently review applications for the following areas:</p>
                    </div>

                    <div className={styles.rolesGrid}>
                        {roles.map((role, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.roleCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <h3 className={styles.roleTitle}>{role.title}</h3>
                                <span className={styles.roleArea}>{role.area}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.applyBox}>
                        <h3 className={styles.applyHeadline}>Don't see a fit?</h3>
                        <p className={styles.applyDesc}>Send us your CV and a brief introduction. We are always interested in connecting with top talent.</p>
                        <Link to="/contact" className={styles.primaryCTA}>Submit Application</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;

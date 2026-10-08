import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import styles from './Work.module.css';

const Work: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.workPage}>
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
                            See our ideas in <span className={styles.italicText}>action</span>
                        </motion.h1>
                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Explore our portfolio of successful collaborations, where strategic thinking
                            meets flawless execution to deliver measurable results.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Projects Grid Section */}
            <section className={styles.projectsSection}>
                <div className={styles.container}>
                    <div className={styles.projectsGrid}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className={styles.projectCard}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
                            >
                                <div className={styles.projectImageContainer}>
                                    <img src={project.image} alt={project.title} className={styles.projectImage} />
                                    <div className={styles.projectOverlay}>
                                        <Link to="#" className={styles.viewCaseStudyBtn}>View Case Study</Link>
                                    </div>
                                </div>

                                <div className={styles.projectInfo}>
                                    <div className={styles.projectMeta}>
                                        <span className={styles.metaItem}>{project.client}</span>
                                        <span className={styles.metaDivider}>•</span>
                                        <span className={styles.metaItem}>{project.category}</span>
                                    </div>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDesc}>{project.shortDescription}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaHeadline}>Have a project in mind?</h2>
                        <Link to="/contact" className={styles.primaryCTA}>Let's Talk</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;

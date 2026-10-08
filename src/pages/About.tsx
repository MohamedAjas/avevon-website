import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import styles from './About.module.css';

const About: React.FC = () => {
    const steps = [
        { title: 'Understand', desc: 'We dive deep to understand your brand and objectives.' },
        { title: 'Plan', desc: 'We craft strategic communications tailored for impact.' },
        { title: 'Deliver', desc: 'Creative execution with unmatched attention to detail.' },
        { title: 'Review', desc: 'We analyze, refine, and optimize for continuous success.' }
    ];

    return (
        <div className={styles.aboutPage}>
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
                            Ideas with <span className={styles.italicText}>purpose</span>
                        </motion.h1>
                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Avevon is a premier communications and creative agency based in Colombo, Sri Lanka.
                            We build meaningful relationships between brands and their audiences through
                            strategic thinking, authentic communication, and practical delivery.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Image Block */}
            <section className={styles.imageBlockSection}>
                <motion.div
                    className={styles.heroImageWrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
                        alt="Creative team planning"
                        className={styles.heroImage}
                    />
                </motion.div>
            </section>

            {/* Approach Section */}
            <section className={styles.approachSection}>
                <div className={styles.container}>
                    <div className={styles.approachHeader}>
                        <h2 className={styles.sectionHeading}>Our Approach</h2>
                        <p className={styles.approachDesc}>
                            A methodology built on precision and creativity, designed to yield measureable outcomes.
                        </p>
                    </div>

                    <div className={styles.stepsGrid}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={styles.stepCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className={styles.stepHeader}>
                                    <div className={styles.stepNumber}>0{index + 1}</div>
                                    {index < steps.length - 1 && <ChevronRight className={styles.stepArrow} size={24} />}
                                </div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className={styles.philosophySection}>
                <div className={styles.container}>
                    <div className={styles.philosophyGrid}>
                        <div className={styles.philosophyImages}>
                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" alt="Team meeting" className={styles.philImage1} />
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" alt="Strategy planning" className={styles.philImage2} />
                        </div>
                        <div className={styles.philosophyText}>
                            <h2 className={styles.sectionHeading}>Authentic communication. Unwavering attention to detail.</h2>
                            <ul className={styles.coreValues}>
                                <li><ChevronRight size={18} className={styles.valueIcon} /> Strategic Thinking</li>
                                <li><ChevronRight size={18} className={styles.valueIcon} /> Creative Execution</li>
                                <li><ChevronRight size={18} className={styles.valueIcon} /> Media Engagement</li>
                                <li><ChevronRight size={18} className={styles.valueIcon} /> Collaborative Relationships</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

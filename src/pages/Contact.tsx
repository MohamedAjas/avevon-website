import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        organisation: '',
        email: '',
        phone: '',
        serviceRequired: '',
        projectBrief: '',
        budget: '',
        timeline: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.projectBrief.trim()) newErrors.projectBrief = 'Project Brief is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error on interact
        if (errors[name]) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs[name];
                return newErrs;
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormData({
                    name: '', organisation: '', email: '', phone: '',
                    serviceRequired: '', projectBrief: '', budget: '', timeline: ''
                });

                // Reset success state after 5 seconds
                setTimeout(() => setIsSuccess(false), 5000);
            }, 1500);
        }
    };

    return (
        <div className={styles.contactPage}>
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
                            Let's talk about your next <span className={styles.italicText}>project</span>
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.mainSection}>
                <div className={styles.container}>
                    <div className={styles.gridContainer}>

                        {/* Contact Details */}
                        <motion.div
                            className={styles.contactDetails}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className={styles.sectionHeading}>Get in Touch</h2>
                            <p className={styles.desc}>
                                Whether you need a comprehensive PR campaign, a dynamic event, or a digital overhaul,
                                our team is ready to deliver. Reach out today.
                            </p>

                            <div className={styles.infoBlock}>
                                <div className={styles.infoRow}>
                                    <MapPin className={styles.infoIcon} size={24} />
                                    <div>
                                        <h3 className={styles.infoTitle}>Office</h3>
                                        <p className={styles.infoText}>301/2, Galle Road, Colombo 03, Sri Lanka</p>
                                    </div>
                                </div>

                                <div className={styles.infoRow}>
                                    <Phone className={styles.infoIcon} size={24} />
                                    <div>
                                        <h3 className={styles.infoTitle}>Phone</h3>
                                        <p className={styles.infoText}><a href="tel:+94112345678" className={styles.link}>+94 11 234 5678</a></p>
                                    </div>
                                </div>

                                <div className={styles.infoRow}>
                                    <Mail className={styles.infoIcon} size={24} />
                                    <div>
                                        <h3 className={styles.infoTitle}>Email</h3>
                                        <p className={styles.infoText}><a href="mailto:hello@avevon.com" className={styles.link}>hello@avevon.com</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.mapArea}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: '4px', minHeight: '350px' }}
                                    loading="lazy"
                                    allowFullScreen
                                    src="https://maps.google.com/maps?q=301/2,+Galle+Road,+Colombo+03,+Sri+Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            className={styles.formContainer}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {isSuccess ? (
                                <div className={styles.successState}>
                                    <CheckCircle2 size={48} className={styles.successIcon} />
                                    <h3 className={styles.successTitle}>Thank you!</h3>
                                    <p className={styles.successText}>Your enquiry has been received. Our team will get back to you shortly.</p>
                                </div>
                            ) : (
                                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                                    <div className={styles.formGrid}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="name">Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={errors.name ? styles.inputError : ''}
                                            />
                                            {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="organisation">Organisation</label>
                                            <input
                                                type="text"
                                                id="organisation"
                                                name="organisation"
                                                value={formData.organisation}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={errors.email ? styles.inputError : ''}
                                            />
                                            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                            <label htmlFor="serviceRequired">Service Required</label>
                                            <select
                                                id="serviceRequired"
                                                name="serviceRequired"
                                                value={formData.serviceRequired}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select a service...</option>
                                                <option value="pr">Public Relations</option>
                                                <option value="digital">Digital Marketing</option>
                                                <option value="events">Events</option>
                                                <option value="advertising">Advertising & Brand Activation</option>
                                                <option value="investment">Investment Promotion</option>
                                                <option value="multiple">Multiple / Integrated</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                            <label htmlFor="projectBrief">Project Brief *</label>
                                            <textarea
                                                id="projectBrief"
                                                name="projectBrief"
                                                rows={4}
                                                value={formData.projectBrief}
                                                onChange={handleChange}
                                                className={errors.projectBrief ? styles.inputError : ''}
                                            ></textarea>
                                            {errors.projectBrief && <span className={styles.errorMsg}>{errors.projectBrief}</span>}
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="budget">Indicative Budget</label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select budget range...</option>
                                                <option value="tier1">&lt; $10k</option>
                                                <option value="tier2">$10k - $50k</option>
                                                <option value="tier3">$50k - $100k</option>
                                                <option value="tier4">&gt; $100k</option>
                                            </select>
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="timeline">Preferred Timeline</label>
                                            <select
                                                id="timeline"
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select timeline...</option>
                                                <option value="immediate">Immediate / ASAP</option>
                                                <option value="1-3-months">1-3 Months</option>
                                                <option value="3-6-months">3-6 Months</option>
                                                <option value="planning">Just Planning</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''}`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

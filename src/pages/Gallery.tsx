import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import styles from './Gallery.module.css';

const categories = ['All', 'Events', 'Campaigns', 'Brand Activations', 'Media', 'Behind the Scenes'];

// Mock images
const galleryImages = [
    { id: 1, category: 'Events', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, category: 'Campaigns', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, category: 'Brand Activations', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop' },
    { id: 4, category: 'Media', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop' },
    { id: 5, category: 'Behind the Scenes', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop' },
    { id: 6, category: 'Events', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop' },
    { id: 7, category: 'Campaigns', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop' },
    { id: 8, category: 'Brand Activations', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop' },
    { id: 9, category: 'Behind the Scenes', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop' },
];

const Gallery: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredImages = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <div className={styles.galleryPage}>
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
                            Our <span className={styles.italicText}>gallery</span>
                        </motion.h1>
                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            A visual journey through our most impactful events, campaigns,
                            and behind-the-scenes moments that shape brand narratives.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Gallery Filters */}
            <section className={styles.filterSection}>
                <div className={styles.container}>
                    <div className={styles.filtersWrapper}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className={styles.galleryGridSection}>
                <div className={styles.container}>
                    <motion.div layout className={styles.galleryGrid}>
                        <AnimatePresence>
                            {filteredImages.map((img) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    key={img.id}
                                    className={styles.galleryItem}
                                    onClick={() => setSelectedImage(img.img)}
                                >
                                    <img src={img.img} alt={`Gallery - ${img.category}`} className={styles.image} loading="lazy" />
                                    <div className={styles.imageOverlay}>
                                        <Search size={24} className={styles.zoomIcon} />
                                        <span className={styles.imageCategory}>{img.category}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className={styles.lightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
                            <X size={32} />
                        </button>
                        <motion.img
                            src={selectedImage}
                            alt="Enlarged gallery view"
                            className={styles.lightboxImage}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;

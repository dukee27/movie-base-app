import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SliderNumber = ({ slides }) => {
    // Duplicate the slides array to create a seamless infinite loop
    const duplicatedSlides = [...slides, ...slides];
    
    // Track if the user is dragging so we don't accidentally click a link
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="relative w-full overflow-hidden my-8 cursor-grab active:cursor-grabbing">
            <motion.div
                className="flex gap-6 w-max"
                // Enable horizontal dragging
                drag="x"
                // Add some constraints so they can't drag it completely off-screen
                dragConstraints={{ right: 0, left: -2000 }} 
                // Animate to -50% to perfectly loop the duplicated array
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    ease: 'linear',
                    duration: 25, // Adjust this number to make it faster/slower
                    repeat: Infinity,
                }}
                // Update dragging state
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
            >
                {duplicatedSlides.map((slide, index) => {
                    // Fallback image if poster is missing
                    const imageUrl = slide.poster_path 
                        ? `https://image.tmdb.org/t/p/w500${slide.poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image";

                    return (
                        <Link
                            key={`${slide.id}-${index}`}
                            to={`/movie/${slide.id}`}
                            onClick={(e) => {
                                // If the user was dragging, prevent the link from opening
                                if (isDragging) {
                                    e.preventDefault();
                                }
                            }}
                            // Adjusted width and height for movie poster proportions (portrait)
                            className="shrink-0 w-44 h-64 md:w-52 md:h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg group"
                        >
                            <img 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                src={imageUrl}
                                alt={slide.title}
                                draggable="false" // VERY IMPORTANT: Prevents browser from ghost-dragging the image
                            />
                        </Link>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default SliderNumber;
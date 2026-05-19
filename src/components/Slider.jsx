import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SliderNumber = ({ slides }) => {
    const duplicatedSlides = [...slides, ...slides];
    
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="relative w-full overflow-hidden my-8 cursor-grab active:cursor-grabbing">
            <motion.div
                className="flex gap-6 w-max"
                drag="x"
                dragConstraints={{ right: 0, left: -2000 }} 
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    ease: 'linear',
                    duration: 25, 
                    repeat: Infinity,
                }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
            >
                {duplicatedSlides.map((slide, index) => {
                
                    const imageUrl = slide.poster_path 
                        ? `https://image.tmdb.org/t/p/w500${slide.poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image";

                    return (
                        <Link
                            key={`${slide.id}-${index}`}
                            to={`/movie/${slide.id}`}
                            onClick={(e) => {
                                if (isDragging) {
                                    e.preventDefault();
                                }
                            }}
                            className="shrink-0 w-44 h-64 md:w-52 md:h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg group"
                        >
                            <img 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                src={imageUrl}
                                alt={slide.title}
                                draggable="false" 
                            />
                        </Link>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default SliderNumber;
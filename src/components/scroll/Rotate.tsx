import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"; // Pastikan ini diimport dari 'react-intersection-observer'

interface SectionProps {
    children: React.ReactNode,
    key: any,
    direction: 'right' | 'left'
}


export default function Rotate({ children, direction, key }: SectionProps) {
    const { ref, inView } = useInView({ triggerOnce: true }); // Menggunakan useInView dari react-intersection-observer

    return (
        <section ref={ref} className="text-8xl">
            <AnimatePresence>
                {inView && (
                    direction === 'right' ?
                        <motion.div
                        key={key}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-fit"
                    >
                            {children}
                        </motion.div>
                        :
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="w-fit"

                        >
                            {children}
                        </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer";

interface SectionProps {
    children: React.ReactNode,
    key: any,
    direction: 'right' | 'left'
}


export default function Fade({ children, direction, key }: SectionProps) {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section ref={ref} className="text-8xl">
            <AnimatePresence>
                {inView && (
                    direction==='right'?
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1, delay: 0.2 }}

                    >
                        {children}
                    </motion.div>
                    :
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1, delay: 0.2 }}

                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

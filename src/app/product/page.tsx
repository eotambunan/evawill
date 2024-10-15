'use client';
import Drag from "@/components/scroll/Drag";
import FadeIn from "@/components/scroll/Drag";
import Fade from "@/components/scroll/Fade";
import Rotate from "@/components/scroll/Rotate";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import BankCard from "@/components/BankCard";

const Product = () => {
    const [isTrue, setIsTrue] = useState<boolean>(false);
    const [isMusicPlay, setIsMusicPlay] = useState<boolean>(true);
    const parallaxRef = useRef<IParallax | null>(null);

    const scrollToTop = () => {
        if (parallaxRef.current) {
            parallaxRef.current.scrollTo(0); // Scroll to the top of the first layer
        }
    };

    return (
        <>
            <Parallax pages={3} ref={parallaxRef}>
                <div className="bg-slate-400 h-screen">
                    <button
                        className="bg-red-300"
                        onClick={() => {
                            setIsTrue(!isTrue);
                        }}
                    >
                        Click
                    </button>
                    <AnimatePresence>
                        {isTrue ? (
                            <motion.div
                                key={'asdasdasdasd'}
                                className="h-40 w-40 bg-green-500"
                                initial={{ opacity: 0, y: 200, x: 200, rotate: 0 }}
                                animate={{ opacity: 1, y: 0, x: 0, rotate: 360 }}
                                exit={{ opacity: 0, x: 400, rotate: 900 }}
                                transition={{ duration: 1 }}
                            >
                                asd
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </div>

                <div className="h-screen bg-pink-300">
                    <div className="bg-yellow-300">
                        <Fade direction="left" key={1}>ini</Fade>
                    </div>
                    <div className="bg-green-400 flex flex-row-reverse">
                        <Rotate direction="right" key={1}>
                            <p>gass</p>
                            <p>gass</p>
                            <p>gass</p>
                            <p>gass</p>
                        </Rotate>
                    </div>
                    <div className="bg-red-400 flex flex-row-reverse">
                        <Drag direction="left" key={3}>aowkaowk</Drag>
                    </div>
                </div>

                <ParallaxLayer
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'end',
                    }}
                    speed={-.9}
                >
                    <motion.div
                        className="flex flex-col bg-slate-400 opacity-70 h-fit w-fit rounded-full"
                        whileHover={{ opacity: 1 }}
                    >
                        <motion.button
                            className="bg-orange-500 rounded-full w-12 h-12 m-2"
                            onClick={() => { setIsMusicPlay(!isMusicPlay); }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {isMusicPlay ? <MusicNoteIcon /> : <MusicOffIcon />}
                        </motion.button>
                        <motion.button
                            className="bg-orange-500 rounded-full w-12 h-12 m-2"
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <ExpandLessIcon />
                        </motion.button>

                    </motion.div>
                </ParallaxLayer>
                <div>
                    <BankCard
                        accountHolder="Evander Oktapian"
                        bankLogo="/bca.png"
                        bankName="BCA"
                        accountNumber="23123123"
                    />
                </div>


            </Parallax>
        </>
    );
};

export default Product;

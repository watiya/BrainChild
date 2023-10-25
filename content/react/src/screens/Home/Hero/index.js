import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";

const Hero = ({ scrollToRef }) => {
    return (
        <div className={styles.hero}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <div className={cn("stage", styles.stage)}>
                        Train smarter. get stronger
                    </div>
                    <h1 className={cn("h1", styles.title)}>
                        Simple fitness experience for everyone.
                    </h1>
                    <div className={styles.text}>
                        Track your workouts, get better results, and be the
                        bestversion of you. Less thinking, more lifting.
                    </div>
                    <div className={styles.btns}>
                        <Link
                            className={cn("button", styles.button)}
                            to="/download"
                        >
                            Download App
                        </Link>
                        <Link
                            className={cn("button-stroke", styles.button)}
                            to="/class02-details"
                        >
                            Book a Class
                        </Link>
                    </div>
                </div>
                <ScrollButton
                    onScroll={() =>
                        scrollToRef.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    className={styles.scroll}
                />
                <div className={styles.gallery}>
                    <div className={styles.preview}>
                        <Image
                            srcSet="/images/content/watch@2x.png 2x"
                            srcSetDark="/images/content/watch-dark@2x.png 2x"
                            src="/images/content/watch.png"
                            srcDark="/images/content/watch-dark.png"
                            alt="Watch"
                        />
                    </div>
                    <div className={styles.preview}>
                        <img
                            srcSet="/images/content/ball@2x.png 2x"
                            src="/images/content/ball.png"
                            alt="Ball"
                        />
                    </div>
                    <div className={styles.preview}>
                        <img
                            srcSet="/images/content/bottle@2x.png 2x"
                            src="/images/content/bottle.png"
                            alt="Bottle"
                        />
                    </div>
                    <div className={styles.preview}>
                        <img
                            srcSet="/images/content/ball-black@2x.png 2x"
                            src="/images/content/ball-black.png"
                            alt="Ball black"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

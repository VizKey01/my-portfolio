'use client';
import React, { useState, useEffect } from 'react';
// import { TypeAnimation } from 'react-type-animation';
import classNames from 'classnames';
import styles from './mainpage.module.scss';
import { ReactComponent as ReactLogo } from '../../assets/react.svg';
import { ReactComponent as ViteLogo } from '../../assets/vite.svg';
import { ReactComponent as TypescriptLogo } from '../../assets/typescript.svg';
import { ReactComponent as ScssLogo } from '../../assets/scss.svg';
import resumeFile from '../../assets/Picture/Patit_Maiprasert-Update.pdf';
import GithubIcon from '../../assets/icons/github-icon.svg';
import InstagramIcon from '../../assets/icons/instagram-icon.svg';
import LinkedInIcon from '../../assets/icons/linkedin-icon.svg';

export interface MainpageProps {
    className?: string;
}

const TypewriterAnimation = ({ }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const words = [
        'Hello Everyone',
        'My name is Micky',
        'I am Web Developer',
        'I am Programmer',
        'I am Computer Engineer',
        'I am Ux/Ui Designer',
        'I am Innovator',
    ];
    const speed = 55; // Adjust the speed

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && currentText === words[currentWordIndex]) {
                // If the word is complete, wait for 2 seconds before starting deletion
                setTimeout(() => {
                    setIsDeleting(true);
                }, 1000);
            }

            if (isDeleting) {
                setCurrentText((prevText) => prevText.slice(0, -1));
            } else {
                setCurrentText(words[currentWordIndex].slice(0, currentText.length + 1));
            }

            if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [currentText, currentWordIndex, isDeleting, words, speed]);

    return (
        <span className={styles.typewriter}>
            {currentText}
            <span className={styles.cursor}></span>
        </span>
    );
};

export const Mainpage = ({ className }: MainpageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['box-title']}>
                <h2 className={styles.title}>Patit Maiprasert</h2>
                <h4 className={classNames(styles.subtitle)}>
                    <TypewriterAnimation />
                </h4>
                
                <p className={classNames(styles.description, styles['contact-icons'])}>
                  <a href="https://github.com/VizKey01/" target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} alt="GitHub" className={classNames(styles.contactIcon, styles.githubIcon)} />
                  </a>
                  <a href="https://www.instagram.com/viz_key/" target="_blank" rel="noopener noreferrer">
                    <img src={InstagramIcon} alt="Instagram" className={classNames(styles.contactIcon, styles.instagramIcon)} />
                  </a>
                  <a href="https://www.linkedin.com/in/patit-maiprasert-266bb62a1/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn" className={classNames(styles.contactIcon, styles.linkedinIcon)} />
                  </a>
                </p>
            </div>

            <button className={styles.button}>
                <a href={resumeFile} target="_blank" rel="noopener noreferrer" className={styles.a}>
                    👉🏻 My CV Here 👈🏻
                </a>
            </button>
            {/* <div>
                <a href="https://vitejs.dev" target="_blank">
                    <ViteLogo
                        height="6em"
                        width="6em"
                        className={classNames(styles.logo)}
                        title="Vite logo"
                    />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <ReactLogo
                        height="6em"
                        width="6em"
                        className={classNames(styles.logo, styles.react)}
                        title="React logo"
                    />
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank">
                    <TypescriptLogo
                        height="6em"
                        width="6em"
                        className={classNames(styles.logo, styles.ts)}
                        title="Typescript logo"
                    />
                </a>
                <a href="https://sass-lang.com/" target="_blank">
                    <ScssLogo
                        height="6em"
                        width="6em"
                        className={classNames(styles.logo, styles.scss)}
                        title="SCSS logo"
                    />
                </a>
            </div> */}
        </div>
    );
};

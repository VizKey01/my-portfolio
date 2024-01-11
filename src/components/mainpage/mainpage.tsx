"use client";
import React, { useState, useEffect } from 'react';
// import { TypeAnimation } from 'react-type-animation';
import classNames from 'classnames';
import styles from './mainpage.module.scss';
import { ReactComponent as ReactLogo } from '../../assets/react.svg';
import { ReactComponent as ViteLogo } from '../../assets/vite.svg';
import { ReactComponent as TypescriptLogo } from '../../assets/typescript.svg';
import { ReactComponent as ScssLogo } from '../../assets/scss.svg';

export interface MainpageProps {
    className?: string;
}

const TypewriterAnimation = ({}) => {
  
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
  const speed = 75; // Adjust the speed

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
      <span className={styles.cursor}>/</span>
    </span>
  );
};

export const Mainpage = ({ className }: MainpageProps) => {

    return <div className={classNames(styles.root, className)}>
        <div className={styles['box-title']}>
            <h2 className={styles.title}>Patit Maiprasert</h2>
            <h4 className={classNames(styles.subtitle)}>
          <TypewriterAnimation />
          </h4>
            <span>text</span>
        </div>
        
        <button className={styles.button}>👉🏻 My CV Here 👈🏻</button>
        <p>This is a paragraph.</p>
        <div>
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
        </div>
    </div>;
};

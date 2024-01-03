"use client";
import classNames from 'classnames';
import styles from './mainpage.module.scss';
import { ReactComponent as ReactLogo } from '../../assets/react.svg';
import { ReactComponent as ViteLogo } from '../../assets/vite.svg';
import { ReactComponent as TypescriptLogo } from '../../assets/typescript.svg';
import { ReactComponent as ScssLogo } from '../../assets/scss.svg';
import { TypeAnimation} from 'react-type-animation';
export interface MainpageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Mainpage = ({ className }: MainpageProps) => {
    return <div className={classNames(styles.root, className)}>Mainpage
        <div className={styles['box-title']}>
            <h2 className={styles.title}>Patit Maiprasert</h2>
            <h3 className={styles.subtitle}>Software Engineer, Designer, Programmer</h3>
            <span>text</span>
            
        </div>
        <TypeAnimation
                sequence={[
                    'We produce food for Mice',
                    1000,
                    'We produce food for Hamsters',
                    1000,
                    'We produce food for Guinea Pigs',
                    1000,
                    'We produce food for Chinchillas',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
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

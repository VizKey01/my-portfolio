import classNames from 'classnames';
import styles from './navbar.module.scss';
// import { Link } from 'react-router-dom';

//npm run npm install react-router-dom
export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.navbar}>
                <div className={styles.logo}>
                    {/* Your logo goes here */}
                    hello world
                    {/* <ReactLogo height="50" width="50" /> */}
                </div>
                <div className={styles.links}>
                    <a href="#home">Home</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#about">About Me</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>;
};

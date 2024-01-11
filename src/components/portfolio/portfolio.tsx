import classNames from 'classnames';
import styles from './portfolio.module.scss';
import posn101logo from '../../assets/Picture/posn101-main.png';
import cedtcardslogo from '../../assets/Picture/cedtcard-main.png';
import NLPprojectlogo from '../../assets/Picture/posn101-main.png';
import Omowobotlogo from '../../assets/Picture/posn101-main.png';

export interface PortfolioProps {
    className?: string;
}

export const Portfolio = ({ className }: PortfolioProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h3 className={styles.h3}>Portfolio</h3>
            <p className={styles.description}>
                I’m Computer Engineering student.<br></br>
                💻👩‍💻💻 Presently studying NLP with an emphasis on application development.<br></br>
                🚀 Aim to be developer and create new innovations to help make the world better.
            </p>
            <h4>2023</h4>
            <div className={styles['grid-items']}>
                <div className={styles['gird-content']}>
                    <img src={posn101logo} alt="" className={styles['grid-img']} />
                    <div className={styles['visit-site']}>
                        <h4>Project name</h4>
                        <a>visit</a>
                    </div>
                </div>
                <div className={styles['gird-content']}>
                    <img src={cedtcardslogo} alt="" className={styles['grid-img']} />
                    <div className={styles['visit-site']}>
                        <h4>Project name</h4>
                        <a>visit</a>
                    </div>
                </div>
                <div className={styles['gird-content']}>
                    <img src={posn101logo} alt="" className={styles['grid-img']} />
                    <div className={styles['visit-site']}>
                        <h4>Project name</h4>
                        <a>visit</a>
                    </div>
                </div>
                <div className={styles['gird-content']}>
                    <img src={posn101logo} alt="" className={styles['grid-img']} />
                    <div className={styles['visit-site']}>
                        <h4>Project name</h4>
                        <a>visit</a>
                    </div>
                </div>
            </div>
            <h4>2022</h4>
            <h4>2021</h4>
        </div>
    );
};

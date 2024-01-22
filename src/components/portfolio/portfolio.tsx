// import React from 'react';
// import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './portfolio.module.scss';
import Posn101logo from '../../assets/Picture/posn101-main.png';
import Cedtcardslogo from '../../assets/Picture/cedtcard-main.png';
import NLPprojectlogo from '../../assets/Picture/Streamlitapp.png';
import Omowobotlogo from '../../assets/Picture/OmowoBot.png';
import Kibo4logo from '../../assets/Picture/4thKIBO-RPC_webpage.jpg';
import Kibo3logo from '../../assets/Picture/3rdKIBO-RPC_OK_web.jpg';
import PhysicWeblogo from '../../assets/Picture/PhysicWeb.png';
import Pullybotlogo from '../../assets/Picture/pullybot.png';


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
            <h4>2024</h4>
            <h5 className={styles['sub-year']}>Competitive Academic -</h5>
            <h5 className={styles['sub-year']}>Project -</h5>
            <h4>2023</h4>
            <h5 className={styles['sub-year']}>Competitive Academic -</h5>
            <div className={styles['grid-items']}>
                <div className={styles['gird-content']}>
                    <img src={Kibo4logo} alt="" className={styles['grid-img']} />
                    <div className={styles['visit-site']}>
                        <h4>Project name</h4>
                        <a>visit</a>
                    </div>
                </div>
            </div>
            <h5 className={styles['sub-year']}>Project -</h5>
            <div className={styles['grid-items']}>
                <div className={styles['gird-content']}>
                    <img src={NLPprojectlogo} alt="" className={styles['grid-img']} />
                    <div className={styles['visit-site']}>
                        <h4>Project name</h4>
                        <a>visit</a>
                    </div>
                </div>
                <div className={styles['gird-content']}>
                    <img src={Cedtcardslogo} alt="" className={styles['grid-img']} />
                    <div className={styles['visit-site']}>
                        <h4>Project name</h4>
                        <a>visit</a>
                    </div>
                </div>
                
                <div className={styles['gird-content']}>
                    <img src={Omowobotlogo} alt="" className={styles['grid-img']} />
                    <div className={styles['visit-site']}>
                        <h4>Project name</h4>
                        <a>visit</a>
                    </div>
                </div></div>
            <h4>2022</h4>
            <h5 className={styles['sub-year']}>Competitive Academic -</h5>
            <div className={styles['grid-items']}>
                <div className={styles['gird-content']}>
                    <img src={Kibo3logo} alt="" className={styles['grid-img']} />
                    <div className={styles['visit-site']}>
                        <h4>Project name</h4>
                        <a>visit</a>
                    </div>
                </div>
            </div>
            <h5 className={styles['sub-year']}>Project -</h5>
            <div className={styles['grid-items']}>
                <div className={styles['gird-content']}>
                    <img src={Posn101logo} alt="" className={styles['grid-img']} />
                    <div className={styles['visit-site']}>
                        <h4>Project name</h4>
                        <a>visit</a>
                    </div>
                </div>
                <div className={styles['gird-content']}>
                    <img src={Pullybotlogo} alt="" className={styles['grid-img']} />
                    <div className={styles['visit-site']}>
                        <h4>Project name</h4>
                        <a>visit</a>
                    </div>
                </div>
            </div>
            
            <h4>2021</h4>
            <div className={styles['grid-items']}>
                <div className={styles['gird-content']}>
                    <img src={PhysicWeblogo} alt="" className={styles['grid-img']} />
                    <div className={styles['visit-site']}>
                        <h4>Project name</h4>
                        <a>visit</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

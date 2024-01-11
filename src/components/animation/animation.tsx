import classNames from 'classnames';
import styles from './animation.module.scss';
import Lottie from 'lottie-react'
import man from '../../assets/Man-animation.json'
import {motion} from 'framer-motion'

export interface AnimationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Animation = ({ className }: AnimationProps) => {
    return <div className={classNames(styles.root, className)}>Animation</div>;
};

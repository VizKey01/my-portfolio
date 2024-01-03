import classNames from 'classnames';
import styles from './portfolio.module.scss';

export interface PortfolioProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Portfolio = ({ className }: PortfolioProps) => {
    return <div className={classNames(styles.root, className)}>Portfolio</div>;
};

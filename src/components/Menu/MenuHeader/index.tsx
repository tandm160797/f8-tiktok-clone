import { type FC } from 'react';

import { Icon } from '@components';
import clsx from 'clsx';
import styles from './MenuHeader.module.scss';

export interface MenuHeaderProps {
	title: string;
	onBack?: () => void;
	className?: string;
}

const MenuHeader: FC<MenuHeaderProps> = ({
	title,
	className = '',
	onBack,
	...restProps
}: MenuHeaderProps): JSX.Element => (
	<div className={clsx(styles.menuHeader, { [className]: className })} {...restProps}>
		<Icon className={styles.backIcon} icon="arrow-back" size={20} onClick={onBack} />
		<h3 className={styles.headerTitle}>{title}</h3>
	</div>
);

export default MenuHeader;

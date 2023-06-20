import React from 'react';

import { Button } from '@components';
import styles from './MenuItem.module.scss';

export interface MenuItemProps {
	icon: React.ReactElement;
	title: string;
	to?: string;
}

const MenuItem = ({ icon, title, ...restProps }: MenuItemProps): JSX.Element => (
	<Button className={styles.menuItem} fullWidth variant="text" prefixIcon={icon} {...restProps}>
		{title}
	</Button>
);

export default MenuItem;

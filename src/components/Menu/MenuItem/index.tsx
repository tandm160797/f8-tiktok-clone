import clsx from 'clsx';
import { type ReactNode } from 'react';

import { Button } from '@components';
import { type ButtonProps } from '@components/Button';
import styles from './MenuItem.module.scss';

export interface MenuItemProps extends Omit<ButtonProps, 'children'> {
	title: string;
	icon?: ReactNode;
	className?: string;
	children?: {
		title: string;
		data: MenuItemProps[];
	};
}

const MenuItem = ({ title, icon, className = '', ...restProps }: MenuItemProps): JSX.Element => (
	<Button
		className={clsx(styles.menuItem, {
			[className]: className
		})}
		fullWidth
		variant="text"
		prefixIcon={icon}
		{...restProps}
	>
		{title}
	</Button>
);

export default MenuItem;

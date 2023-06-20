import Tippy, { type TippyProps } from '@tippyjs/react/headless';
import React from 'react';

import { Popper } from '@components';
import MenuItem, { type MenuItemProps } from '@components/Menu/MenuItem';
import styles from './Menu.module.scss';

interface MenuProps extends Omit<TippyProps, 'children'> {
	items: MenuItemProps[];
	children: React.ReactNode;
}

const Menu = ({ items, children, ...restProps }: MenuProps): JSX.Element => {
	const itemsRender = (): React.ReactElement[] => items.map((item, index) => <MenuItem key={index} {...item} />);

	return (
		<Tippy
			interactive
			placement="bottom-end"
			delay={[0, 700]}
			{...restProps}
			render={attrs => (
				<div tabIndex={-1} {...attrs} className={styles.menu}>
					<Popper className={styles.menuPropper}>{itemsRender()}</Popper>
				</div>
			)}
		>
			<div className={styles.iconWrapper}>{children}</div>
		</Tippy>
	);
};

export default Menu;

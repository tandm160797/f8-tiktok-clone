import Tippy, { type TippyProps } from '@tippyjs/react/headless';
import React, { useState } from 'react';

import { Popper } from '@components';
import MenuHeader from '@components/Menu/MenuHeader';
import MenuItem, { type MenuItemProps } from '@components/Menu/MenuItem';
import clsx from 'clsx';
import styles from './Menu.module.scss';

interface MenuProps extends Omit<TippyProps, 'children'> {
	items: MenuItemProps[];
	children: React.ReactNode;
	onChange?: (item: MenuItemProps) => void;
}

const Menu = ({ items, children, onChange = () => {}, ...restProps }: MenuProps): JSX.Element => {
	const [history, setHistory] = useState([{ title: '', data: items }]);
	const current = history[history.length - 1];

	const handleOnBack = (): void => {
		setHistory(history.slice(0, history.length - 1));
	};

	const handleMenuItemClick = (item: MenuItemProps): void => {
		if (item.children) {
			setHistory([...history, item.children]);
		} else {
			onChange(item);
		}
	};

	const itemsRender = (): React.ReactElement[] =>
		current.data.map((item, index) => (
			<MenuItem
				key={index}
				className={clsx({
					[styles.menuItemNotEqualsLv1]: history.length > 1
				})}
				onClick={() => {
					handleMenuItemClick(item);
				}}
				{...item}
			/>
		));

	return (
		<Tippy
			interactive
			placement="bottom-end"
			delay={[0, 700]}
			{...restProps}
			render={attrs => (
				<div tabIndex={-1} {...attrs} className={styles.menu}>
					<Popper className={styles.menuPropper}>
						{history.length > 1 && <MenuHeader title={current.title} onBack={handleOnBack} />}
						{itemsRender()}
					</Popper>
				</div>
			)}
		>
			<div className={styles.iconWrapper}>{children}</div>
		</Tippy>
	);
};

export default Menu;

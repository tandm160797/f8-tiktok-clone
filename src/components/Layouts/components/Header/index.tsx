import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { AccountItem, Button, Icon, Image, Popper } from '@components';
import Menu from '@components/Menu';
import { type MenuItemProps } from '@components/Menu/MenuItem';
import styles from './Header.module.scss';

const MENU_ITEMS: MenuItemProps[] = [
	{
		icon: <Icon icon="language" size={20} />,
		title: 'Tiếng Việt',
		children: {
			title: 'Ngôn ngữ',
			data: [
				{
					type: 'language',
					title: 'English',
					code: 'en'
				},
				{
					type: 'language',
					title: 'Tiếng Việt',
					code: 'vi'
				}
			]
		}
	},
	{ icon: <Icon icon="question" size={20} />, title: 'Phản hồi và trợ giúp', to: '/feedback' },
	{ icon: <Icon icon="keyboard" size={20} />, title: 'Phím tắt trên bàn phím' },
	{ icon: <Icon icon="dark-mode" size={20} />, title: 'Chế độ tối' }
];

const Header = (): JSX.Element => {
	const [state] = useState(true);

	const [data, setData]: any = useState<any>([]);

	const handleMenuChange = (menuItem: MenuItemProps): void => {
		console.log(menuItem);
	};

	useEffect(() => {
		setTimeout(() => {
			setData([1]);
		}, 2000);
	}, []);

	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<Image image="tiktok-logo" width="118" height="42" />

				<Tippy
					interactive
					visible={data.length > 0}
					render={attrs => (
						<div className={styles.searchResult} tabIndex={-1} {...attrs}>
							<Popper>
								<div className={styles.searchTitle}>Accounts</div>
								{[1, 2, 3].map((_, index) => (
									<AccountItem
										key={index}
										account={{
											name: 'hoa_2309',
											suggestDesc: 'Ngô Ngọc Hoà',
											age: 24,
											avatar:
												'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1687363200&x-signature=I%2FQgN46TMTcnFOrFtrCISr4IsEs%3D'
										}}
									/>
								))}
							</Popper>
						</div>
					)}
				>
					<div className={styles.search}>
						<input className={styles.input} placeholder="Tìm kiếm" spellCheck={false} />
						{state ? (
							<Icon className={clsx(styles.clearIcon)} icon="cancel-circle" size="16" />
						) : (
							<Icon icon="spinner" size="16" />
						)}

						<span className={styles.separator} />
						<button className={styles.searchBtn}>
							<Icon icon="search" size="24" />
						</button>
					</div>
				</Tippy>

				<div className={styles.actions}>
					<Button>+ Tải lên</Button>
					<Button variant="primary">Đăng nhập</Button>
					<Menu items={MENU_ITEMS} onChange={handleMenuChange}>
						<Icon className={styles.moreIcon} icon="more-vertical" size={20} />
					</Menu>
				</div>
			</div>
		</header>
	);
};

export default Header;

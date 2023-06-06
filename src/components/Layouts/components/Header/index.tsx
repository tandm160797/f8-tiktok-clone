import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { AccountItem, Button, Icon, Image, Popper } from '@components';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
	const [state] = useState(true);

	const [data, setData]: any = useState([]);

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
												'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/122b95d1cd9bd6f885598a039dc6b74d~c5_300x300.webp?x-expires=1686204000&x-signature=vKVHLEI5p80KefPl6frQcioeEq0%3D'
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
					<Icon className={styles.moreIcon} icon="more-vertical" size={20} />
				</div>
			</div>
		</header>
	);
};

export default Header;

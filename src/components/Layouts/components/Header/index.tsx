import clsx from 'clsx';
import { useState } from 'react';

import { Button, Icon, Image } from '@components';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
	const [state] = useState(true);

	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<Image image="tiktok-logo" width="118" height="42" />

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

				<div className={styles.actions}>
					<Button to="abc" variant="primary" size="small" prefixIcon={<Icon icon="search" size={16} />}>
						Tải lên
					</Button>
					<Button
						variant="outline"
						onClick={() => {
							console.log(1);
						}}
						suffixIcon={<Icon icon="search" size={16} />}
					>
						Đăng nhập
					</Button>
					<Button
						disabled
						size="large"
						onClick={() => {
							console.log(12);
						}}
					>
						More
					</Button>
					<Button href="https://google.com" target="_blank" variant="text">
						More
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;

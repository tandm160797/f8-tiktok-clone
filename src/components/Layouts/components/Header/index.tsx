import clsx from 'clsx';
import { useState } from 'react';

import Icon from '@components/Icon';
import Image from '@components/Image';
import { Button } from '@components/InputFields';
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
					<Button>Tải lên</Button>
					<Button>Đăng nhập</Button>
					<Button>More</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;

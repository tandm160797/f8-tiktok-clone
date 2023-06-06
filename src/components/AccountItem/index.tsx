import clsx from 'clsx';

import { Icon } from '@components';
import styles from './AccountItem.module.scss';

interface AccountItemProps {
	className?: string;
}

const AccountItem = ({ className = '' }: AccountItemProps): JSX.Element => (
	<div
		className={clsx(styles.accountItem, {
			[className]: className
		})}
	>
		<img className={styles.avatar} src="" alt="Hoa" />
		<div className={styles.info}>
			<div className={styles.wrapper}>
				<span className={styles.name}>Name</span>
				<Icon className={styles.tick} icon="aqua-tick" size={14} />
			</div>

			<span className={styles.suggestDesc}>suggestDesc</span>
		</div>
	</div>
);

export default AccountItem;

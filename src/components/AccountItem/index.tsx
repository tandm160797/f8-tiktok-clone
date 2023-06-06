import clsx from 'clsx';

import { Icon } from '@components';
import styles from './AccountItem.module.scss';

interface AccountItemProps {
	className?: string;
	account: {
		name: string;
		age: number;
		avatar: string;
		suggestDesc: string;
	};
}

const AccountItem = ({ className = '', account }: AccountItemProps): JSX.Element => (
	<div
		className={clsx(styles.accountItem, {
			[className]: className
		})}
	>
		<img className={styles.avatar} src={account.avatar} alt={account.name} />
		<div className={styles.info}>
			<div className={styles.wrapper}>
				<span className={styles.name}>{account.name}</span>
				<Icon className={styles.tick} icon="aqua-tick" size={14} />
			</div>
			<span className={styles.suggestDesc}>{account.suggestDesc}</span>
		</div>
	</div>
);

export default AccountItem;

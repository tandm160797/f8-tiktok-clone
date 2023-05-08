import { useOutlet } from 'react-router-dom';

import { Header } from '@components/Layouts/components';
import Sidebar from '@components/Layouts/DefaultLayout/Sidebar';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = (): JSX.Element => {
	const outlet = useOutlet();

	return (
		<div className={styles.defaultLayout}>
			<Header />
			<div className={styles.container}>
				<Sidebar />
				<div className={styles.content}>{outlet}</div>
			</div>
		</div>
	);
};

export default DefaultLayout;

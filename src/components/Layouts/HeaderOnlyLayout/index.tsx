import { useOutlet } from 'react-router-dom';

import styles from './HeaderOnlyLayout.module.scss';

const HeaderOnlyLayout = (): JSX.Element => {
	const outlet = useOutlet();

	return (
		<div className={styles.headerOnlyLayout}>
			{/* <Header /> */}
			<div className={styles.container}>
				<div className={styles.content}>{outlet}</div>
			</div>
		</div>
	);
};

export default HeaderOnlyLayout;

import { useRoutes } from 'react-router-dom';

import routes from 'src/routes';

const App = (): JSX.Element => {
	const routing = useRoutes(routes);

	return <>{routing}</>;
};

export default App;

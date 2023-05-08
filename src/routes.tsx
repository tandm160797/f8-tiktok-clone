import { type RouteObject } from 'react-router-dom';

import { DefaultLayout, HeaderOnlyLayout } from '@components/Layouts';
import { Home } from '@pages';

const routes: RouteObject[] = [
	// publicRoutes
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{
				index: true,
				element: <Home />
			}
		]
	},
	{
		path: '/following',
		element: <HeaderOnlyLayout />,
		children: [
			{
				index: true,
				element: <Home />
			}
		]
	}

	// privateRoutes
];

export default routes;

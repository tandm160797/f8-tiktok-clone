import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from '@components';
import App from 'src/App';

const root = createRoot(document.querySelector('#root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyles>
				<App />
			</GlobalStyles>
		</BrowserRouter>
	</React.StrictMode>
);

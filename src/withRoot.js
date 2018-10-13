import { ThemeProvider } from 'react-jss';
import React from 'react';

const theme = {
	palette: {
		primary: '#0d4e86',
		scondary: '#b9ad17',
		background: '#e2e2e2',
		white: '#ffffff',
		black: '#000000'
	},
	spacing: {
		unit: 8
	},
	breakpoints: {
		xs: '@media (min-width: 0px)',
		sm: '@media (min-width: 600px)',
		md: '@media (min-width: 960px)'
	},
	typography: {
		fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, sans-serif',
		fontSizes: {
			title: {
				xs: 18,
				sm: 22,
				md: 26
			},
			body: {
				xs: 11,
				sm: 12,
				md: 14
			}
		}
	}
};

const withRoot = Component => (
	<ThemeProvider theme={theme}>
		<Component />
	</ThemeProvider>
);

export default withRoot;

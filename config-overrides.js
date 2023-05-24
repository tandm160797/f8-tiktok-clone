const { resolve } = require('path');
const { override, addWebpackAlias, addWebpackModuleRule } = require('customize-cra');

module.exports = {
	webpack: override(
		addWebpackModuleRule({
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader',
				{
					loader: 'sass-loader',
					options: {
						sourceMap: true,
						additionalData: '@import "src/components/GlobalStyles/variables.scss";'
					}
				}
			]
		}),

		addWebpackAlias({
			'@components': resolve(__dirname, 'src/components'),
			'@pages': resolve(__dirname, 'src/pages'),
			'@utils': resolve(__dirname, 'src/utils')
		})
	)
};

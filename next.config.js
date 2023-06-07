const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	reactStrictMode: true,

	webpack(config) {
		config.optimization.minimizer.push(new CssMinimizerPlugin());
		return config;
	},
};

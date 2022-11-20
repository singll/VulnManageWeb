import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path'
// const path = require('path');

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			'@apis': path.resolve(__dirname, './src/apis/'),
		}
	},
	server: {
		host: '127.0.0.1',
		port: '5173',
		open: false,
	}
};

export default config;

// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(), 
		vite: {
            define: {
                'process.env': process.env,
            },
        },
	}
};

export default config;

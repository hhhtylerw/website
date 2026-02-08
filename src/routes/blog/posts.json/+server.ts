import { getPosts } from '$lib/helpers';
import { type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	return getPosts('blog');
};

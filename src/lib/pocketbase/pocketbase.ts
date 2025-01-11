import { env } from '$env/dynamic/public';
import pocketbase from 'pocketbase';

export const pb = new pocketbase(env.PUBLIC_PB_URL);

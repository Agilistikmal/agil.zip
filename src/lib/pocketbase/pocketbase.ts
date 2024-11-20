import { PUBLIC_PB_URL } from '$env/static/public';
import pocketbase from 'pocketbase';

export const pb = new pocketbase(PUBLIC_PB_URL);

import { deleteAsync as del } from 'del';
export const reset = () => {
	return del(['dist'])
}
import { div } from '@/framework/element'
export const  User = ((fname, lname) => {
	const c = div`hello ${fname} ${lname}, welcome to the team`;
	console.log(c);
	return c;
})

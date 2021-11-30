import axios from 'axios'

export const API_URL = 'http://localhost:5000/'

export const accessTokenConfig = (token:string) => {
	
	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}` ;
	} else {
		delete	axios.defaults.headers.common['Authorization']
		
	}
}
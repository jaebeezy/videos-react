import axios from 'axios';

const KEY = 'AIzaSyDj7Wd0m_EUxhS63lcIsl5t6tkkTQnyYw0';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: `${KEY}`
	}
});
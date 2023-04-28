import axios from 'axios';
export { fetchImages };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '35835121-57fe520d07d0410f4b491e31b';

async function fetchImages(query, page, perPage) {
    debugger;
    let response;
    try {
        response = await axios.get(
            `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`);
    } catch (e) {
        console.log(e);
    }


  return response;
}
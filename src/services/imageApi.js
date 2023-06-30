import axios from 'axios';

const KEY = '35804077-868b4923c4d4b0980765f3041';
const perPage = 12;

axios.defaults.baseURL = `https://pixabay.com/api`;

export const fetchImagesApi = async (searchValue, page) => {
  const response = await axios.get(
    `/?q=${searchValue}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  return response.data.hits;
};

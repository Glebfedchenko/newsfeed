import axios from 'axios';
import * as actions from '../constants/news';

export const getNewsStart = () => ({
  type: actions.GET_NEWS_START,
});

export const getNews = () => {
  const request = axios.get(actions.BASE_URL).then(res => res.data);
  return {
    type: actions.GET_NEWS_SUCCESS,
    payload: request,
  };
};

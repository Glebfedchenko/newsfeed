import * as actions from '../constants/news';

const initialState = {news: [], isLoading: false};
export const news = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_NEWS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload.articles,
        isLoading: false,
      };
    default:
      return state;
  }
};

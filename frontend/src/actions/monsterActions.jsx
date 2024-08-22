import {
  MONSTER_LIST_REQUEST,
  MONSTER_LIST_SUCCESS,
  MONSTER_LIST_FAIL,
  GET_NEXT_MONSTER_PAGE_REQUEST,
  GET_NEXT_MONSTER_PAGE_SUCCESS,
  TOGGLE_MONSTER_FAVORITE,
} from '../constants/monstersConstants';
import axios from 'axios';

const APIURL = 'https://api.open5e.com/monsters/?limit=25';
axios.defaults.headers.common = {
  Accept: 'application/json',
};

export const getAllMonsters = () => async (dispatch) => {
  try {
    dispatch({ type: MONSTER_LIST_REQUEST });

    const { data } = await axios.get(
      'https://api.open5e.com/monsters/?limit=25'
    );

    dispatch({ type: MONSTER_LIST_SUCCESS, payload: data });
    console.log('in getAllMonsters:', data, data.results);
  } catch (error) {
    dispatch({
      type: MONSTER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMonsterPage =
  (page = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_NEXT_MONSTER_PAGE_REQUEST });
      if (page === 0) {
        const { data } = await axios.get(APIURL);
        dispatch({
          type: GET_NEXT_MONSTER_PAGE_SUCCESS,
          payload: data,
        });
      } else {
        const { data } = await axios.get(
          `https://api.open5e.com/monsters/?limit=25&page=${page}`
        );
        dispatch({
          type: GET_NEXT_MONSTER_PAGE_SUCCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: MONSTER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const toggleFavorite = (monster) => (dispatch) => {
  try {
    dispatch({ type: TOGGLE_MONSTER_FAVORITE, payload: monster.name });
  } catch (error) {
    dispatch({
      type: MONSTER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

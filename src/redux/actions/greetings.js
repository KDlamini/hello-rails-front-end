import FETCH_ALL_GREETINGS from './actionTypes';
import fetchGreetings from '../../api/api';

// API action creators
const getGreetings = () => async (dispatch) => {
  try {
    const data = await fetchGreetings();

    dispatch({ type: FETCH_ALL_GREETINGS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getGreetings;

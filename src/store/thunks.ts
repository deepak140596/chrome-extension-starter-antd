// thunks.ts
import { Dispatch } from 'redux';
import { fetchData1, fetchData2, setData } from './actions';

// Use your actual API endpoints and logic
const fetchDataFromEndpoint1 = () => async (dispatch: Dispatch) => {
  // simulate API call
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  const data1 = await result.json();

  dispatch(setData({ data1, data2: null }));
};

const fetchDataFromEndpoint2 = () => async (dispatch: Dispatch) => {
  // simulate API call
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  const data2 = await result.json();

  dispatch(setData({ data1: null, data2 }));
};

export { fetchDataFromEndpoint1, fetchDataFromEndpoint2 };

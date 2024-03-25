// import { Dispatch } from 'redux';
// import { fetchData, postData } from '../api/apiService';

// // Action Types
// export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
// export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
// export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

// // Action Creators
// const fetchDataRequest = () => ({
//   type: FETCH_DATA_REQUEST,
// });

// const fetchDataSuccess = (data: any) => ({
//   type: FETCH_DATA_SUCCESS,
//   payload: data,
// });

// const fetchDataFailure = (error: any) => ({
//   type: FETCH_DATA_FAILURE,
//   payload: error,
// });

// const postDataRequest = () => ({
//   type: POST_DATA_REQUEST,
// });

// const postDataSuccess = (data: any) => ({
//   type: POST_DATA_SUCCESS,
//   payload: data,
// });

// const postDataFailure = (error: any) => ({
//   type: POST_DATA_FAILURE,
//   payload: error,
// });

// // Async Action to Fetch Data
// export const fetchDataAndUpdateStore = (url: string, method: string = 'GET', body?: any) => async (dispatch: Dispatch) => {
//     if (method === 'GET') {
//       try {
//       dispatch(fetchDataRequest());
//       let responseData;
//       responseData = await fetchData(url);
//       console.log("From Actions:", responseData);
//       dispatch(fetchDataSuccess(responseData));
//       } catch (error) {
//         dispatch(fetchDataFailure(error));
//       }
//     } else if (method === 'POST') {
//       try {
//         dispatch(postDataRequest());
//         let responseData;
//         responseData = await postData(url, body);
//         dispatch(postDataSuccess(responseData));
//       } catch(error){
//         dispatch(postDataFailure(error));
//       }
//     } 
// };


// actions.ts

import { createAction } from '@reduxjs/toolkit';
export const fetchData1 = createAction('FETCH_DATA_1');
export const fetchData2 = createAction('FETCH_DATA_2');
export const setData = createAction<{ data1: any; data2: any }>('SET_DATA');


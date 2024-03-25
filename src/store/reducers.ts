// // Import your action types
// import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS, POST_DATA_FAILURE } from './actions';

// // Define the state types
// interface apiState {
//   data: any;
//   loading: boolean;
//   error: any;
// }

// const apiInitState: apiState = {
//   data: '',
//   loading: false,
//   error: '',
// };

// export interface State {
//   apiInitState: apiState;
// }

// export const initialState: State = {
//   apiInitState,
// };

// const dataReducer = (state: State = initialState, action: any): State => {
//   switch (action.type) {
//     case FETCH_DATA_REQUEST: {
//       const _state = state.apiInitState;
//       return { ...state, apiInitState: { ..._state, loading: true, error: null } };
//     }
//     case FETCH_DATA_SUCCESS: {
//       const _state = state.apiInitState;
//       console.log(state)
//       return { ...state, apiInitState: { ..._state, data: action.payload, loading: false, error: null } };
//     }
//     case FETCH_DATA_FAILURE: {
//       const _state = state.apiInitState;
//       return { ...state, apiInitState: { ..._state, loading: false, error: action.payload } };
//     }

//     case POST_DATA_REQUEST: {
//       const _state = state.apiInitState;
//       return { ...state, apiInitState: { ..._state, loading: true, error: null } };
//     }

//     case POST_DATA_SUCCESS: {
//       const _state = state.apiInitState;
//       return { ...state, apiInitState: { ..._state, data: action.payload, loading: false, error: null } };
//     }
//     case POST_DATA_FAILURE: {
//       const _state = state.apiInitState;
//       return { ...state, apiInitState: { ..._state, loading: false, error: action.payload } };
//     }
//     default:
//       return state;
//   }
// };


// export default dataReducer;


// reducers.ts
// reducers.ts
import { createReducer } from '@reduxjs/toolkit';
import { fetchData1, fetchData2, setData } from './actions';

interface AppState {
  data1: any;
  data2: any;
}

const initialState: AppState = {
  data1: null,
  data2: null,
};

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchData1, (state) => {
      // handle fetchData1 action
    })
    .addCase(fetchData2, (state) => {
      // handle fetchData2 action
    })
    .addCase(setData, (state, action) => {
      // handle setData action
      state.data1 = action.payload.data1;
      state.data2 = action.payload.data2;
    });
});


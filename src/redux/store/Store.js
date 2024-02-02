import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

// import CounterReducer from "../reducers/CounterReducer";
import rootReducer from "../reducers/RootReducer";

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);
const initialState = {
    sidebarShow: true,
}

//   const changeState = (state = initialState, { type, ...rest }) => {
//     switch (type) {
//       case 'set':
//         return { ...state, ...rest }
//       default:
//         return state
//     }
//   }

export default function Store(previousState) {
    const store = createStore(
        rootReducer,
        previousState,
        composedEnhancers,
        //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}



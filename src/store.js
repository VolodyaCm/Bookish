import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers/reducer';

const initialState = { books: [] };
const composedEnhancers = compose(
  applyMiddleware(thunk)
)

const store = createStore(
  reducer,
  initialState,
  composedEnhancers,
)

export default store;

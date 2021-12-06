import store from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

const withStoreProvider = (component) => {
  return (
    <Provider store={store}>
      <Router>
        {component}
      </Router>
    </Provider>
  )
}

export default withStoreProvider;

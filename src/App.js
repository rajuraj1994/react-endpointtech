import './App.css';
import MyRoute from './MyRoute';
// import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
// provider is used to pass data from reducers to component
// import watchReducer from './redux/reducers/watchReducer';
import store from './store';

function App() {
  // const store = legacy_createStore(watchReducer)
  return (
    <Provider store={store}>
      <MyRoute />
    </Provider>
  );
}

export default App;

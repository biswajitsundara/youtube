import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body/Body';
import Head from './components/Head/Head';
import store from './utils/store';

function App() {
  return (
    <Provider store={store} >
    <div className="App">
       <Head />
       <Body />
    </div>
    </Provider>
  );
}

export default App;

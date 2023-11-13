import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body/Body';
import Head from './components/Head/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/Body/MainContainer/MainContainer';
import WatchPage from './components/Body/MainContainer/Watch/WatchPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path:"/",
      element: <MainContainer />
    },
    {
      path:"/watch",
      element: <WatchPage />
    }
  ]
}])

function App() {
  return (
    <Provider store={store} >
    <div className="App">
       <Head />
       <RouterProvider router={appRouter} className="grid grid-flow-col"/>
       {/* <Body /> */}
    </div>
    </Provider>
  );
}

export default App;

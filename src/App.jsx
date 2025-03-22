import Head from "./components/Header/Head"
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import store from "./util/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/Body/MainContainer/MainContainer";
import WatchPage from "./components/Watch/WatchPage";

function App() {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      }
    ]
  }])

  return (
    <Provider store={store}>
      <Head />
      {/* <Body /> */}
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
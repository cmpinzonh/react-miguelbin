import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {loader as playerLoader} from './routes/App';
import ErrorPage from './components/error/error-page';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PlayerProfile from './routes/PlayerProfile';
import MySquad from './routes/MySquad';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element:<App />,
        errorElement: <ErrorPage />,
        loader: playerLoader,
        children:[{path: "/post", element:<NewPost />}]
      },
      {
        path: "/players/:id",
        element:<PlayerProfile />,
        errorElement: <ErrorPage />
      },
      {
        path: "/mysquad",
        element:<MySquad />,
        errorElement: <ErrorPage />
      },
    ]
  },
  
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

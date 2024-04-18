import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Login from './pages/theme/light/Login';
import Register from './pages/theme/light/register';
import Message from './pages/Message';
import Follwer from './pages/Follower';
import Mypage from './pages/Mypage';
import Profile from './pages/Profile';
import Setting from './pages/Setting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'message', element: <Message /> },
      { path: 'follwer', element: <Follwer /> },
      { path: 'mypage', element: <Mypage /> },
      { path: 'profile', element: <Profile /> },
      { path: 'setting', element: <Setting /> },
      // { path: 'videos/watch/:videoId', element: <VideoDetail /> },
      // { path: 'signUp', element: <SignUp /> },
      // { path: 'signIn', element: <SignIn /> },
      // { path: 'videos/record',
      //   element: <ProtectedRoute><ViewRecord /></ProtectedRoute> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
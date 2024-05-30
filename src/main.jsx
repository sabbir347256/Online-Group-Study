import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Errorpage from './components/ErrorPage/Errorpage';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import AuthContext from './AuthProvider/AuthContext';
import CreateAssignment from './components/Pages/CreateAssignment/CreateAssignment';
import AllAssignment from './components/Pages/AllAssignment/AllAssignment';
import MyAssignment from './components/Pages/MyAssignment/MyAssignment';
import UpdateAssignment from './components/Pages/UpdateAssignment/UpdateAssignment';
import ViewAssignmentDetails from './components/ViewAssignmentDetails/ViewAssignmentDetails';
import Register from './components/Register/Register';
import PendingAssignment from './components/PendingAssignment/PendingAssignment';
import MarkPage from './components/MarkPage/MarkPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './components/Pages/ContactUs/Contact';
import { HelmetProvider } from 'react-helmet-async';
import Subscription from './components/Pages/Subscription/Subscription';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/createassignment',
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
      {
        path: '/allassignment',
        element: <AllAssignment></AllAssignment>
      },
      {
        path: '/myassignment',
        element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>
      },
      {
        path : 'subscription',
        element : <Subscription></Subscription>
      },
      {
        path: '/updateassignment/:id',
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: ({ params }) => fetch(`https://online-group-study-server-site.vercel.app/updateAssignment/${params.id}`)
      },
      {
        path: '/assignmentDetails/:id',
        element: <PrivateRoute><ViewAssignmentDetails></ViewAssignmentDetails></PrivateRoute>,
        loader: () => fetch('https://online-group-study-server-site.vercel.app/assignmentDetails')
      },
      {
        path: '/pendingassignment',
        element: <PrivateRoute><PendingAssignment></PendingAssignment></PrivateRoute>
      },
      {
        path: '/markpage/:id',
        element: <MarkPage></MarkPage>,
        loader: ({ params }) => fetch(`https://online-group-study-server-site.vercel.app/submitAssignment/${params.id}`)
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthContext>
  </React.StrictMode>,
)

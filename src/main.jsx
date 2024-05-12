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
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/createassignment',
        element : <CreateAssignment></CreateAssignment>
      },
      {
        path : '/allassignment',
        element : <AllAssignment></AllAssignment>
      },
      {
        path : '/myassignment',
        element : <MyAssignment></MyAssignment>
      },
      {
        path: '/updateassignment/:id',
        element: <UpdateAssignment></UpdateAssignment>,
        loader: ({ params }) => fetch(`http://localhost:5000/updateAssignment/${params.id}`)
      },
      {
        path : '/assignmentDetails/:id',
        element : <ViewAssignmentDetails></ViewAssignmentDetails>,
        loader : () => fetch('http://localhost:5000/assignmentDetails')
      },
      {
        path : '/pendingassignment',
        element : <PendingAssignment></PendingAssignment>,
      },
      {
        path : '/markpage/:id',
        element : <MarkPage></MarkPage>,
        loader : ({params}) => fetch(`http://localhost:5000/submitAssignment/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)

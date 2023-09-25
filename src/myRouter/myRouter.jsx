import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/rootLayout';
import Home from '../pages/Home';
import Donation from '../pages/Donation/Donation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Statistics from '../pages/Statistics/Statistics';

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch("/data.json")
            },

            {
                path: "/donation",
                element: <Donation></Donation>
            },

            {
                path: "/statistics",
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default myRouter;
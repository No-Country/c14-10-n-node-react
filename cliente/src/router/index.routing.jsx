import LoginPage from "../pages/Auth/LoginPage";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import DashboardPage from "../pages/dashboard/DashboardPage";
import TransactionPage from '../pages/dashboard/transacciones/TransactionPage'
import FavoritePage from '../pages/dashboard/favoritos/FavoritePage'
import CardsPage from '../pages/dashboard/cards/CardsPage'
import ConfigPage from '../pages/dashboard/configuracion/ConfigPage'
import Error404 from "../components/Error404";
import SignUpPage from "../pages/Auth/SignUpPage"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes />,
        children: [
            /*  { index: true, element: <Home /> }, */
            { index: true, element: <LoginPage /> },
            { path: 'signup', element: <SignUpPage /> }
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: 'transacciones',
                element: <TransactionPage />,
            },
            {
                path: 'configuración',
                element: <ConfigPage />,
            },
            {
                path: 'tarjetas',
                element: <CardsPage />,
            },
            {
                path: 'favoritos',
                element: <FavoritePage />,
            },
        ],
    },
    {
        path: '*',
        element: <Error404 />,
    },
]);
import LoginPage from "../pages/Auth/LoginPage";
import Home from "../pages/Home/Home";
import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import DashboardPage from "../pages/dashboard/DashboardPage";
import TransactionPage from '../pages/dashboard/transacciones/TransactionPage'
import FavoritePage from '../pages/dashboard/favoritos/FavoritePage'
import CardsPage from '../pages/dashboard/cards/CardsPage'
import ConfigPage from '../pages/dashboard/configuracion/ConfigPage'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes />,
        children: [
            { index: true, element: <Home /> },
            { path: 'login', element: <LoginPage /> },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes />,
        children: [
            {
                path: '',
                element: (
                    <DashboardPage />
                ),
                children: [
                    {
                        path: 'transacciones',
                        element: <TransactionPage />,
                    },
                    {
                        path: 'configuracion',
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
                    {
                        index: true,
                        element: <Navigate to='orders' />,
                    },
                ],
            },
            { index: true, element: <DashboardPage /> },
            { path: '*', element: <Navigate to='/dashboard' /> },
        ],
    },
    {
        path: '*',
        element: <Navigate to='/login' />,
    },
]);
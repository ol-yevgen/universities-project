import { Suspense, lazy } from 'react';
import { Spinner } from "../components/Spinner/Spinner"

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));

export const App = () => {
    return (
        <Suspense fallback={<Spinner/>}>
            <MainPage/>
        </Suspense>
    );
}
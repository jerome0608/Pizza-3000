import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "./App"
import NotFound from './components/NotFound';
import NewOrder from './routes/NewOrder';
import Order from './routes/Order';
import PaymentOrder from './routes/PaymentOrder';

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Route par défaut vers la page d'accueil */}
                <Route exact path="/" element={<App />} />
                {/* Route vers les différentes pages du site */}
                <Route exact path="/neworder" element={<NewOrder />} />
                <Route exact path="/order" element={<Order />} />
                <Route exact path="/paymentorder" element={<PaymentOrder />} />
                {/* Route par défaut vers une page introuvable avec le path * */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Root
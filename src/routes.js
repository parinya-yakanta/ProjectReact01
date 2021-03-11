import {Route, Switch} from 'react-router-dom';
import React from 'react'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Forgotpassword from './pages/forgotpassword/Forgotpassword';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Dashboard from './pages/backend/dashboard/Dashboard';
import Product from './pages/backend/product/Product';
import Research from './pages/backend/research/Research';

const Routes = () => {
    return (
        <Switch>
            {/* Frontend */}
            <Route path="/" exact={true} component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={Forgotpassword} />

            {/* Backend */}
            <Route path="/backend/dashboard" component={Dashboard} />
            <Route path="/backend/product" component={Product} />
            <Route path="/backend/research" component={Research} />


            <Route component={PageNotFound} />
        </Switch>
    )
}

export default Routes

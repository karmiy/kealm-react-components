import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import wholeRoutes from '@/router';

const RouteBuilder = ({children, ...props}) => (
    <Switch>
        {
            children.map((item, index) => (
                    <Route
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        render={
                            (routeProps) => {
                                if(item.redirect){
                                    return <Redirect to={item.redirect} />
                                }
                                const ViewComponent = item.component;
                                return <ViewComponent {...routeProps} {...props} routes={item.routes} />;
                            }
                        }
                    />
                )
            )
        }
    </Switch>
);
const RouterView = ({routes, ...props}) => (
    <RouteBuilder {...props}>{routes ? routes : wholeRoutes}</RouteBuilder>
);

export default RouterView;
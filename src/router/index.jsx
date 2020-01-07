import ComponentsRoute from './component';
import ExampleRoute from './example';

const routes = [
    ...ComponentsRoute,
    ...ExampleRoute,
];
/* 重定向与404放到最后 */
routes.sort(route => {
    return !!route.redirect ? 1: -1;
}).sort(route => {
    return route.path === '*' ? 1: -1;
});
export default routes;
import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/breadcrumb',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-breadcrumb' */'@/docs/breadcrumb')} />
        )
    }
]
export default routes
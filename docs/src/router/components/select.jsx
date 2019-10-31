import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/select',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-select' */'@/docs/select')} />
        )
    }
]
export default routes
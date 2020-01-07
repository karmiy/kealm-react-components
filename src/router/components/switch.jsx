import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/switch',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-switch' */'@/docs/switch')} />
        )
    }
]
export default routes
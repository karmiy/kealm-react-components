import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/grid',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-grid' */'@/docs/grid')} />
        )
    }
]
export default routes
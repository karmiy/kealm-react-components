import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/pagination',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-pagination' */'@/docs/pagination')} />
        )
    }
]
export default routes
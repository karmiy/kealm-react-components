import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/tag',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-tag' */'@/docs/tag')} />
        )
    }
]
export default routes
import React  from 'react';
import { Bundle } from '@/components';

const routes = [
    {
        path: '/component/message',
        component: (props) => (
            <Bundle {...props} load={() => import(/* webpackChunkName: 'group-message' */'@/docs/message')} />
        )
    }
]
export default routes
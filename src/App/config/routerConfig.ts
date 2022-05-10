/**
 * @file 路由配置文件
 * @author liuwenlong
 */

import TestPage from '@/page/TestPage/Main';

const routerConfig = [
    {
        path: '/test-page',
        component: TestPage,
        exact: true
    }
];

export default routerConfig;

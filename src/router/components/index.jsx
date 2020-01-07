// 获取所有组件路由，排除index.jsx
const contexts = require.context('./', false, /^(?!.*index).*\.jsx$/)

// 合并到componentRoutes数组中
// contexts.keys(): 获取全部文件夹的名称
// contexts(fileName).default: 获取文件的默认导出
const componentRoutes = contexts.keys().reduce((routes, fileName) => [...routes, ...contexts(fileName).default], [])

export default componentRoutes
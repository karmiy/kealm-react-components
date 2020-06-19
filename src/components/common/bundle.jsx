import React, { useState, useEffect } from 'react';

/* 功能组件：路由按需引入 */
function Bundle(props) {
    const [Mod, setMod] = useState(null);
    const {load, ..._props} = props;
    useEffect(() => {
        load().then((_mod) => {
            setMod(() => _mod.default || null)
        });
    }, [])
    return Mod ? <Mod {..._props} /> : null;
}
export default Bundle;

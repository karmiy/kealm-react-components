import React from 'react';
import { Link } from 'react-router-dom';
import { isString } from '@/utils/common';

function ApiTable(props) {
    const { title, propsList, eventsList } = props;
    const propsTable = propsList && (
        <>
            <h2>{title} Props</h2>
            <table>
                <thead>
                    <tr>
                        <th>参数</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>可选</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                    {propsList.map((prop, index) => (
                        <tr key={index}>
                            <td>{prop.param}</td>
                            <td>{prop.des}</td>
                            <td>{prop.type}</td>
                            <td>
                            {
                                isString(prop.option) ?
                                    prop.option
                                    :
                                    <Link to={prop.option.link}>{prop.option.info}</Link>
                            }
                            </td>
                            <td>{prop.default}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
    const eventsTable = eventsList && (
        <>
            <h2>{title} Events</h2>
            <table>
                <thead>
                <tr>
                    <th>事件名称</th>
                    <th>说明</th>
                    <th>回调参数</th>
                </tr>
                </thead>
                <tbody>
                {eventsList.map((prop, index) => (
                    <tr key={index}>
                        <td>{prop.name}</td>
                        <td>{prop.des}</td>
                        <td>{prop.callback}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
    return (
        <>
            {propsTable}
            {eventsTable}
        </>
    )
}

export default ApiTable;
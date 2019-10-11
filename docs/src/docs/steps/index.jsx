import React from 'react';
import { Steps } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

const Step = Steps.Step;

function StepsDoc() {
    return (
        <div className='page-box'>
            <h1>Steps 步骤条</h1>
            <p>引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>简单的步骤条。</p>
            <div className="detail-box">
                <Steps>
                    <Step title={'步骤一'} description={'文本'} />
                    <Step title={'步骤二'} description={'文本'} />
                    <Step title={'步骤三'} description={'文本'} />
                </Steps>
            </div>

            {/* API */}
            {/*<ApiTable title='Breadcrumb' propsList={breadcrumbProps} />*/}
        </div>
    )
}

export default StepsDoc;
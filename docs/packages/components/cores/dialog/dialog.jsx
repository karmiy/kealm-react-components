import React from 'react';
import { DialogProps, DialogDefaultProps } from './interface';
import Button from '../button';
import Icon from '../icon';
import { useContextConf, useClassName } from 'hooks';

function Dialog(props) {
    const {
        className,
        children,
        visible,
        ...others
    } = props;
    const { componentCls } = useContextConf(`dialog`);

    // ---------------------------------- class ----------------------------------
    const dialogClassNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);
    console.log(123);

    // ---------------------------------- render ----------------------------------

    return (
        <div className={`${componentCls}__wrapper`}>
            <div role="dialog" className={dialogClassNames}>
                <div className={`${componentCls}__header`}>
                    <span className={`${componentCls}__title`}>提示</span>
                    {/*<Button circle icon='close' />*/}
                    <button className={`${componentCls}__header-btn`}>
                        <Icon type={'close'} />
                    </button>
                </div>
                <div className={`${componentCls}__body`}>
                    这是一段话
                </div>
                <div className={`${componentCls}__footer`}>
                    <Button>取消</Button>
                    <Button type={'primary'}>确定</Button>
                </div>
            </div>
        </div>
    )
}

Dialog.propTypes = DialogProps;
Dialog.defaultProps = DialogDefaultProps;

export default Dialog;
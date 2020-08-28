import React from 'react'
import classnames from 'classnames'
import AntdIcon, { BorderOutlined } from '@ant-design/icons'

interface IconProps {
    prefixClass?: string;
    type?: any;
    className?: string;
    children?: React.ReactNode;
    font: string;
    antd: string;
    spin?: boolean
}

const Icon:React.FC<IconProps> = (props) => {
    const {prefixClass, type, className, children, font, antd, spin, ...argument} = props
    const classname = classnames(
        prefixClass,
        {
            [font]: font,
            [`${font}-${type}`]: font && type,
            spin
        },
        className
    )
    if (/^&#x.+;$/.test(type)) {
        return (
            <i
                className={classname}
                {...props}
                dangerouslySetInnerHTML={{ __html: type }}
            />
        );
    }
    if(antd) {
        const antdClass = classnames(prefixClass, className)
        if (typeof type === 'string') {
            const Icons = require('@ant-design/icons')[type] || BorderOutlined
            return <Icons className={antdClass} spin={spin} {...props} />;
        }
        if(React.isValidElement(type)) {
            return (
                <AntdIcon
                    component={() => type}
                    className={antdClass}
                    spin={spin}
                    {...props}
                />
            );
        }
    }
    return(
        <i className={className} {...argument}>
            {children}
        </i>
    )
}

export default Icon

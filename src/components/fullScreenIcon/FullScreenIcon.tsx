import React from 'react'
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

interface FullScreenIconProp {
    fullscreen: boolean;
}

const FullScreenIcon: React.FC<FullScreenIconProp> = (prop) => {
    const {fullscreen} = prop

    return fullscreen
        ?
        (<Tooltip title='退出全屏'>
            <FullscreenExitOutlined />
        </Tooltip>)
        :
        (<Tooltip title='全屏'>
            <FullscreenOutlined />
        </Tooltip>)
}

export default FullScreenIcon

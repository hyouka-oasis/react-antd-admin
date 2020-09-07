import React from 'react'
import {history} from "@/utils/history";
import { Button, Result } from 'antd';


const NotFound: React.FC = () => {
    return(
        <Result
            status="404"
            title="404"
            subTitle="对不起没有相关的页面..."
            extra={
                <Button type="primary" onClick={() => history.push('/')}>
                    Back Home
                </Button>
            }
        />
    )
}

export default NotFound

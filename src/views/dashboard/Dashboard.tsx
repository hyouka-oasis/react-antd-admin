import React, {useState, useEffect} from 'react'
import {Row, Col, Card, Tooltip, Statistic} from 'antd'
import "./styles/dashboard.less"
import {Icon} from "@/components";
import {Column} from '@ant-design/charts'
import {getAreaChart} from "@/api/chartsApi";


const Dashboard = () => {
    const [lineData, setLineData] = useState<Array<ObjectAsync<number | string>>>([])
    useEffect(() => {
        getAreaChart().then(res => {
            setLineData(res)
        })
    }, [])
    const config: ChartsConfig = {
        data: lineData,
        xField: 'Date',
        xAxis: {
            visible: false,
        },
        yAxis: {
            visible: false
        },
        yField: 'scales',
        height: 100,
        forceFit: true
    };

    const dashboardArrayList = [
        {
            span: '总销售额',
            iconType: 'InfoCircleOutlined',
            value: Math.floor(Math.random() * 10000000)
        },
        {
            span: '总销售额',
            iconType: 'InfoCircleOutlined',
            value: Math.floor(Math.random() * 10000000)
        },
        {
            span: '总销售额',
            iconType: 'InfoCircleOutlined',
            value: Math.floor(Math.random() * 10000000)
        },
        {
            span: '总销售额',
            iconType: 'InfoCircleOutlined',
            value: Math.floor(Math.random() * 10000000)
        }
    ]

    return (
        <div className='dashboard-component'>

            <Row gutter={16}>
                {
                    dashboardArrayList.map((item: {
                        span: string;
                        iconType: string;
                        value: number | string;
                    }, index: number) => {
                        return(
                            <Col key={index} span={6}>
                                <Card>
                                    <div className='dashboard-component-body'>
                                        <div className='dashboard-component-meta'>
                                            <div className='dashboard-component-chart-top'>
                                                <div className='dashboard-component-chart-top-index'>
                                                    <span>{item.span}</span>
                                                    <Tooltip title={item.span} className='dashboard-component-chart-top-index-tooltip'>
                                                        <Icon type={item.iconType} antd='true' font=''/>
                                                    </Tooltip>
                                                </div>

                                                <div className='dashboard-component-chart-statistic'>
                                                    <Statistic value={`￥${item.value}`}/>
                                                </div>

                                                <div className='dashboard-component-chart'>
                                                    <Column {...config} />
                                                </div>

                                                <div className='dashboard-component-footer'>
                                                    <div className='dashboard-component-footer-span'>
                                                        <span>
                                                            {item.span}
                                                        </span>
                                                        <span style={{marginLeft: '8px'}}>
                                                            ￥{item.value}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>

            <Row gutter={16}>
                <div>
                    123
                </div>
            </Row>

        </div>
    )
}
export default Dashboard

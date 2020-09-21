import React, {useState, useEffect} from 'react'
import {Row, Col, Card, Tooltip, Statistic, DatePicker} from 'antd'
import "./styles/dashboard.less"
import {Icon} from "@/components";
import {Column} from '@ant-design/charts'
import {getAreaChart} from "@/api/chartsApi";
import moment from 'moment'
import {CarTabs} from './components/index'

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

const listState = [
    {
        title: '浙江绍兴店',
        money: '3232,323'
    },
    {
        title: '浙江绍兴店',
        money: '3232,323'
    },
    {
        title: '浙江绍兴店',
        money: '3232,323'
    },
    {
        title: '浙江绍兴店',
        money: '3232,323'
    },
    {
        title: '浙江绍兴店',
        money: '3232,323'
    },
    {
        title: '浙江绍兴店',
        money: '3232,323'
    },
    {
        title: '浙江绍兴店',
        money: '3232,323'
    },
    {
        title: '浙江绍兴店',
        money: '3232,323'
    }
]

const ColumnData = [
    {
        type: '家具家电',
        sales: 38,
    },
    {
        type: '粮油副食',
        sales: 52,
    },
    {
        type: '生鲜水果',
        sales: 61,
    },
    {
        type: '美容洗护',
        sales: 145,
    },
    {
        type: '母婴用品',
        sales: 48,
    },
    {
        type: '进口食品',
        sales: 38,
    },
    {
        type: '食品饮料',
        sales: 38,
    },
    {
        type: '家庭清洁',
        sales: 38,
    },
]

const columnConfig: ChartsConfig = {
    title: {
        visible: true,
        text: '销售趋势',
        style: {
            fontSize: 14
        }
    },
    padding: 'auto',
    xField: 'type',
    xAxis: {
        title: {
            visible: false
        }
    },
    yAxis: {
        title: {
            visible: false
        }
    },
    yField: 'sales',
    data: ColumnData,
    forceFit: true,
}

const style = {
    display: 'flex',
    'flex-direction': 'column',
    height: '100%'
}

const tabPaneList = [
    {
        tab: '销售额',
        key: 1,
        child: (
            <Row>
                <Col span={16}>
                    <Column {...columnConfig}/>
                </Col>
                <Col span={8}>
                    <div style={style}>
                        <ul style={{...style, "listStyle": 'decimal'}}>
                            {
                                listState.map(item => {
                                    return (
                                        <li style={{flex: 1}}>
                                            <span>
                                                {item.title}
                                            </span>
                                                <span>
                                                {item.money}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </Col>
            </Row>
        )
    },
    {
        tab: '访问量',
        key: 2,
        child: (
            <Row>
                <Col span={16}>
                    <Column {...columnConfig}/>
                </Col>
                <Col span={8}>
                    321
                </Col>
            </Row>
        )
    }
]

const tabBarExtraContent = (
    <DatePicker picker="year" defaultValue={moment(new Date(), "YYYY")}/>
)

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

    return (
        <div className='dashboard-component'>

            <Row gutter={16}>
                {
                    dashboardArrayList.map((item: {
                        span: string;
                        iconType: string;
                        value: number | string;
                    }, index: number) => {
                        return (
                            <Col key={index} span={6}>
                                <Card>
                                    <div className='dashboard-component-body'>
                                        <div className='dashboard-component-meta'>
                                            <div className='dashboard-component-chart-top'>
                                                <div className='dashboard-component-chart-top-index'>
                                                    <span>{item.span}</span>
                                                    <Tooltip title={item.span}
                                                             className='dashboard-component-chart-top-index-tooltip'>
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
                <Col span={24}>
                    <Card>
                        <CarTabs tabPaneList={tabPaneList} tabBarExtraContent={tabBarExtraContent}/>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default Dashboard

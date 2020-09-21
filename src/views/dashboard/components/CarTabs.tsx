import React from 'react'
import {Tabs} from 'antd'

const { TabPane } = Tabs;
interface CarTabsProp {
    tabBarExtraContent?: React.ReactNode | {
        left?: React.ReactNode,
        right?: React.ReactNode
    },
    tabPaneList?: Array<{
        tab: string | React.ReactNode;
        key: string | number;
        child: string | React.ReactNode;
    }>
}

const CarTabs: React.FC<CarTabsProp> = (props) => {
    const {tabPaneList, tabBarExtraContent} = props

    return (
        <Tabs tabBarExtraContent={tabBarExtraContent}>
            {
                tabPaneList
                    ? tabPaneList.map(item => {
                        return(
                            <TabPane key={item.key} tab={item.tab}>
                                {item.child}
                            </TabPane>
                        )
                    })
                    : ''
            }
        </Tabs>
    )
}

export default CarTabs

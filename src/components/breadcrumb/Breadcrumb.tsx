import React, {useState, useEffect} from 'react'
import {Breadcrumb} from 'antd'
import {Link} from 'react-router-dom'

const {Item} = Breadcrumb

function getRouterPath(pathName: string) {
    const orderPath: Array<string> = []
    pathName.split('/').reduce((prev: string, next: string) => {
        const path = [prev, next].join('/');
        orderPath.push(path);
        return path;
    })
    return orderPath
        .map(item => window.hyoukaRouterPath[item])
        .filter(item => item)
}

const BreadcrumbAvatar: React.FC<DefaultReactNodeProps> = (prop) => {
    const {location} = prop
    const [currentRoute, setCurrentRoute] = useState<Array<any>>([])
    useEffect(() => {
        setCurrentRoute(getRouterPath(location.pathname))
    },[])
    return (
       <div>
           {
               currentRoute.length
                   ?
                   (
                       <Breadcrumb>
                           <Item>
                               <Link to='/'>
                                   首页
                               </Link>
                           </Item>
                           {
                               currentRoute.map((item) => (
                                   <Item key={item.path}>
                                       <span>
                                           {item.meta.title}
                                       </span>
                                   </Item>
                               ))
                           }
                       </Breadcrumb>
                   )
                   :
                   null
           }
       </div>
    )
}

export default BreadcrumbAvatar

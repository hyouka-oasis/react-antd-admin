interface RouteConfig {
    path: string;
    component: string | React.ReactNode | React.ReactElement | React.FC;
    children?: Array<RouteConfig>;
    redirect?: string;
    icon?: string | React.ReactNode;
    meta?: any;
}

interface DefaultReactNodeProps {
    history?: any;
    location?: any;
    match?: any;
    [key: string]: {
        [key: string]: Array<routeConfig>
    } | any
}

interface MenuProp {
    path: string;
    children?: Array<MenuProp>;
    redirect?: string;
    icon?: string | React.ReactNode;
    meta?: any;
    hidden?: boolean
}


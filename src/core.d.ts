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
    hidden?: boolean;
    parentPath?: string | string[];
}

type ObjectAsync<T> = {
    [key: string]: T
}
type ChartsConfig = {
    width?: number | 400;
    height?: number | 400;
    padding?: string;
    data: Array<ObjectAsync<string | number>>;
    forceFit?: boolean;
    xField: string;
    yField: string;
    smooth?: boolean;
    title?: any,
    xAxis?: ObjectAsync<any>;
    yAxis?: ObjectAsync<any>;
}

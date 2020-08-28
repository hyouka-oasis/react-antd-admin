/// <reference types="react-scripts" />
declare module "*.module.less" {
    const classes: { [key: string]: string };
    export default classes;
}

interface Window {
    hyoukaRouterPath: {
        [key: string]: object | string | Array<any>
    }
}

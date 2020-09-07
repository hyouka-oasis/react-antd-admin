import {createHashHistory} from 'history'

const options = {
    basename: '/'
}

if ((window as any).routerBase) {
    options.basename = (window as any).routerBase;
}

const history = createHashHistory(options)

export {
    history
}

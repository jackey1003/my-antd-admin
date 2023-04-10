export default function importRoute (){
    let webpackObj = require.context('./routes',true,/.js/)
    let routeArr = []
    webpackObj.keys().forEach(item => {
        routeArr.push(webpackObj(item).default)
    });
    return routeArr
}

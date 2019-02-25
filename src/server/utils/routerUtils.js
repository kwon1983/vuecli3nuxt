const r = require('../utils/r');

const setRouter = (router, api, method, url) => {
    router[method](api, async (req, res, next) => {
        let data = {};
        if(typeof (url) === 'string') {
            data = await r[method](req, res, url);
        } else {
            let callList = [];
            for(let callUrl in url) {
                callList.push(r[method](req, res, url[callUrl]));
            }

            const resList = await Promise.all(callList);
            let listNum = 0;
            for(let setName in url) {
                data[setName] = resList[listNum];
                listNum++;
            }
        }

        res.send(data);
    });
};

const parseRouter = (router, routerProps) => {
    for(let api in routerProps) {
        let apiSet = routerProps[api];
        for(let method in apiSet) {
            setRouter(router, api, method, apiSet[method].url);
        }
    }
};

module.exports = {
    setRouter: setRouter,
    parseRouter: parseRouter
};

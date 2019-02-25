const getEnv = () => process.env.NODE_ENV;

let props = null;
const getProps = () => {
    if(!props) {
        try {
            props = require(`../properties/props_${getEnv()}`);
        } catch(e) {
            console.error(`../properties/props_${getEnv()} properties import error`);
        }
    }

    return props;
};

module.exports = {
    getEnv: getEnv,
    getProps: getProps
};

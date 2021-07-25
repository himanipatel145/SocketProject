const dotenv = require('dotenv');
const path = require('path');

const configEnv = () => {
    console.log(process.env.NODE_ENV)
    switch (process.env.NODE_ENV.toLowerCase()) {
        case 'development': {
            dotenv.config({ path: '.env.devlopment' });
        }
        default:
            dotenv.config({ path: '.env.devlopment' });
    }
}

module.exports = configEnv;
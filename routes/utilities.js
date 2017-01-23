const crypto = require('crypto');

exports.hashPassword = function(password){
    const secret = 'yunbgjnbgm';
    const hash = crypto.createHmac('sha256', secret)
                   .update(password)
                   .digest('hex');
    console.log(hash);
    return hash;
};

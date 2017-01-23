var session = {};

exports.check = function(req){
    return (session[req.cookies.user] === req.cookies.session);
};

exports.save = function(req,res){
    session[req.body.username] = Math.random().toString(16);
    res.cookie('session',session[req.body.username],{ expires: new Date(Date.now() + 900000)});
    res.cookie('user',req.body.username,{ expires: new Date(Date.now() + 900000)});
    console.log(session);
};


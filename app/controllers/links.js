const uuidV4 = require('uuid/v4');

module.exports.linkGenerator = function(req, res){
    console.log('test');
        var fulllink = req.params.link;
        var shortlink = uuidV4().slice(0,5);
        var link = {
            fulllink : fulllink,
            shortlink :shortlink
        };
        req.app.db.models.Link.create(link, function(err, link){
            var host = req.headers.host;
            res.send('http://' + host + '/sl/' + link.shortlink);
        });
};

module.exports.linkGeneratorError = function(req, res){
    res.send('Please give data in the format www.google.com')
};

module.exports.findLink = function(req, res){
    var shortlink = req.params.shortlink;
    req.app.db.models.Link.findOne({ shortlink: shortlink}, function(err, link){
        if(err){
            res.send('Server Error');
            return
        }
        if(!link){
            res.send('No Short Link Exists')
        }
        else{
            link.hits += 1;
            link.save();
            res.redirect('http://' + link.fulllink);

        }


    })
};
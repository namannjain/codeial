const Post = require('../models/post');

module.exports.home = function(req, res){
    // return res.end('<h1> Express is up for codeial </h1>')

    // Post.find({}, function(err, posts){
    //     // console.log(req.cookies);
    //     return res.render('home', {
    //         title: "Home",
    //         posts: posts
    //     });
    // })

    Post.find({}).populate('user').exec(function(err, posts){
        return res.render('home', {
            title: "Codeial | Home",
            posts: posts
        });
    });

    
}



//module.exports.actionName = function(req,,res){};
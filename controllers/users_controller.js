const User = require('../models/User');

module.exports.profile = function(req,res){
    // return res.end('<h1> User Profile </h1>')
    
    return res.render('users', {
        title: "Users Profile"
    });
};

//render sign-up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    });
};

//render sign-in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    });
};

//get the sign up data
module.exports.create = function(req, res){
    //revert back if password and confirm password are not equal
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    //check if email is unique
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log("Error in finding user in signing up!"); return}  

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log("Error in creating user while signing up"); return}

                return res.redirect('/users/sign-in');
            })
        } else{
            return res.redirect('back');
        }
    })
}

//sign in and create a session for user
module.exports.createSession = function(req, res){
    //TODO LATER

}
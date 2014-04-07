
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render('users', { users: [{firstname:"Madhi"},{firstname:"Deepu"}]});
};
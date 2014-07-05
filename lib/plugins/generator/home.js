var paginator = require('./paginator');

module.exports = function(locals, render, callback){
  var config = hexo.config;

  if (config.exclude_generator && config.exclude_generator.indexOf('home') > -1) return callback();

  var posts = locals.posts.sort(config.sort_by, -1);
  paginator('', posts, 'index', render);
  callback();
};
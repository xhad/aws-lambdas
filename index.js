const GoogleNewsRss = require('google-news-rss')
const sanitizer = require('sanitizer')


exports.handler = function(event, context, callback) {
  const googleNews = new GoogleNewsRss();
  if (event.hasOwnProperty('keyword')) {
    
  googleNews
    .search('unicorns')
    .then(resp => {
      callback(null, resp);
    });

  } else {
    callback(null, 'invalid request')

  }
};
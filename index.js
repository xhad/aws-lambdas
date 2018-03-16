const GoogleNewsRss = require('google-news-rss')
const sanitizer = require('sanitizer')


exports.handler = function(event, context, callback) {

  try {
    const googleNews = new GoogleNewsRss()
    if (event.hasOwnProperty('keyword')) {
    
      googleNews
        .search(event.keyword)
        .then(resp => callback(null, resp))
    } else {

      callback(null, 'invalid request')
    }
  } catch (err) {

    callback(err, null)
  }
}
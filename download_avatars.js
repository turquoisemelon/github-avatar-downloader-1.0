var request = require('request');
var fs = require('fs');

var GITHUB_USER = "turquoisemelon";
var GITHUB_TOKEN = "ef7403e12556166fad254891cb10bd700c1e5e37";

function getRepoContributors(repoOwner, repoName, callback) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };

  request.get(options, function(err, response) {
    if (err) throw error;
    callback(response);
  });
}

function callback (response) {
  var results = JSON.parse(response.body);
  for (var prop in results) {
    var filePath = './' + results[prop]['login'] + '.jpg';
    downloadImageByURL(results[prop]['avatar_url'], filePath);
  }
}

function downloadImageByURL (url ,filePath) {
  request.get(url).pipe(fs.createWriteStream(filePath));
}

getRepoContributors("jquery", "jquery", callback);

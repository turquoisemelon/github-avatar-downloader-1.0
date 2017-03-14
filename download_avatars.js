var request = require('request');

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
    console.log(results[prop]['avatar_url']);
  }
}


getRepoContributors("jquery", "jquery", callback);


// request.get('https://sytantris.github.io/http-examples/future.jpg')
//        .on('error', function (err) {
//          throw err;
//        })
//        .on('response', function (response) {
//          console.log('Response Status Code: ', response.statusCode);
//          console.log('Response Status Message: ', response.statusMessage);
//          console.log('Response Content Type: ', response.headers['content-type']);
//          console.log('Downloading image...');
//        })
//        .on('end', function (response){
//          console.log('Download complete.');
//        })
//        .pipe(fs.createWriteStream('./future.jpg'))
//        .end();

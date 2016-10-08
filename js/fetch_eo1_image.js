function handlePics(tweets) {
  for (var i = 0; i < tweets.length; i++) {
    try {
      var tweet = tweets[i];
      var temp = document.getElementById('temp');
      temp.innerHTML = tweet;
      var img = document.getElementsByTagName('img')[0];
      var imgUrl = img.src;
      if (imgUrl != undefined) {
        setBackground(imgUrl);
        temp.remove();
        break;
      };
    }
    catch(err) {
      continue
    }
  }
}

function setBackground(imgUrl) {
      var htmlElement = document.getElementsByTagName("html")[0];
      htmlElement.style.background = "url(" + imgUrl + ") no-repeat center center fixed";
      htmlElement.style.backgroundSize = "cover";
}

function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

function fetchTwitterImagesForEO1( twitter_id ) {
    // ##### Main Configuration #####
    // Pulls 20 tweets and traverses them for the first image.
    // Strips out everything except for the first image.
    var config = {
      "id": twitter_id,
      "domId": '',
      "maxTweets": 20,
      "enableLinks": false,
      "showUser": false,
      "showTime": false,
      "showPermalinks": true,
      "showImages": true,
      "showRetweet": false,
      "showInteraction": false,
      "customCallback": handlePics
    };

    twitterFetcher.fetch(config);
}


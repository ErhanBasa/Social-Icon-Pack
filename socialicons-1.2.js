$(document).ready(function(){
	$('.socialpack li a[href*="/rss/"]').addClass("rss");
	$('.socialpack li a[href*="formspring.me"]').addClass("formspring");
	$('.socialpack li a[href*="last.fm"]').addClass("lastfm");
	$('.socialpack li a[href*="furl.net"]').addClass("furl");

	var f = ["technorati.com", "newsvine.com", "bebo.com", "youtube.com", "buzz.com", "livejournal.com", "linkedin.com", "foursquare.com", "delicious.com", "tumblr.com", "plaxo.com", "vimeo.com", "pinterest.com", "shoutwire.com", "google.com", "friendster.com", "facebook.com", "deviantart.com", "flickr.com", "xanga.com", "twitter.com", "mixx.com", "spurl.com", "posterous.com", "squidoo.com", "reddit.com", "digg.com", "stumbleupon.com", "evernote.com", "diigo.com", "aim.com","yahoo.com", "ask.com", "orkut.com", "netvibes.com" , "friendfeed.com", "blinklist.com","plurk.com", "myspace.com", "blogger.com", "wordpress.com"];

	for (var i in f) (function(name, domain) {

	$('.socialpack li a[href*="'+domain+'"]').addClass(name);
	}(f[i].replace(".com", ""), f[i]));
});





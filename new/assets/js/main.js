var POSTS_WRAPPER = document.querySelector('.mini-posts');
var POSTS = [
{
  title: 'Theos Projects',
  image: 'theos-projects.png',
},
{
  title: 'VK Graffiti Uploader',
  image: 'graffiti-uploader.png',
},
{
  title: 'Google Chrome plugins',
  image: 'chrome-plugins.png',
},
{
  title: 'Howdy Ho Poster Sublime Plugin',
  image: 'howdy-ho-post-sublime.png',
},
{
  title: 'learn.javascript.ru offline',
  image: 'learnjsru-reactnative-app.png',
},
{
  title: 'LinkedId Downloader',
  image: 'linkedin-learning-downloader.png',
},
{
  title: 'Mini Web Projects',
  image: 'mini-web-projects.png',
},
{
  title: 'Treehouse downloader',
  image: 'python-treehouse-downloader.png',
},
{
  title: 'ReactJS Emoji',
  image: 'react-emoji.png',
},
{
  title: 'React Native Docs iOS',
  image: 'react-native-docs.png',
},
{
  title: 'VK Audio Message',
  image: 'react-native-vk-audio-messages.png',
},
{
  title: 'Sublime Auto Inputer',
  image: 'sublime-auto-inputer.png',
},
{
  title: 'VK Multi Bot',
  image: 'vk-multi-bot.png',
},
{
  title: 'VK Voice Changer',
  image: 'vk-voice-changer.png',
},
];

function MiniPost(data) {
  // Data
  //  Title
  //  Time
  //  Author
  //  Image
  var html = ' <header>';
  html += '       <h3><a href="#">' + data.title + '</a></h3>';
  html += '       <time class="published" datetime="2015-10-20">October 20, 2015</time>';
  html += '       <a href="#" class="author"><img src="images/avatar.jpg" alt="" /></a>';
  html += '     </header>';
  html += '     <a href="#" class="image"><img src="images/' + data.image + '" alt="" /></a>';
  var elem = document.createElement('article');
  elem.className = 'mini-post';
  elem.innerHTML = html;
  return elem;
}

POSTS.map(function(post, index) {
  POSTS_WRAPPER.appendChild(new MiniPost(post))
});
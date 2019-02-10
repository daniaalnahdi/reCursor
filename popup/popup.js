var selectedSet = 'pol';
var catButton = document.querySelector('#catbutton');
var dogButton = document.querySelector('#dogbutton');
var polButton = document.querySelector('#polbutton');
var flagButton = document.querySelector('#flagbutton');
var hbButton = document.querySelector('#hbbutton');


catButton.addEventListener('click', function(){
  console.log('cats');
  selectedSet = 'cats';
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, selectedSet, function(response) {
    //console.log(response.farewell);
  });
});
  //localStorage.setItem('selectedSet', 'cat');
});
dogButton.addEventListener('click', function(){
  console.log('dogs');
    selectedSet = 'dogs';
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, selectedSet, function(response) {
    //console.log(response.farewell);
  });
});

  //localStorage.setItem('selectedSet', 'dog');
});
polButton.addEventListener('click', function(){
  console.log('pol');
    selectedSet = 'pol';
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, selectedSet, function(response) {
    //console.log(response.farewell);
  });
});

  //localStorage.setItem('selectedSet', 'pol');
});
flagButton.addEventListener('click', function(){
  console.log('flags');
    selectedSet = 'flags';
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, selectedSet, function(response) {
    //console.log(response.farewell);
  });
});

  //localStorage.setItem('selectedSet', 'flag');
});
hbButton.addEventListener('click', function(){
  console.log('hb');
    selectedSet = 'hb';
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, selectedSet, function(response) {
    //console.log(response.farewell);
  });
});

  //localStorage.setItem('selectedSet', 'flag');
});

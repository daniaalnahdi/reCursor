let selectedSet = 'pol';
const catButton = document.querySelector('#catbutton');
const dogButton = document.querySelector('#dogbutton');
const polButton = document.querySelector('#polbutton');
const flagButton = document.querySelector('#flagbutton');
const hbButton = document.querySelector('#hbbutton');


catButton.addEventListener('click', () => {
  selectedSet = 'cats';
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, selectedSet, function (response) {
      //console.log(response.farewell);
    });
  });
  //localStorage.setItem('selectedSet', 'cat');
});
dogButton.addEventListener('click', () => {
  selectedSet = 'dogs';
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, selectedSet, function (response) {
      //console.log(response.farewell);
    });
  });

  //localStorage.setItem('selectedSet', 'dog');
});
polButton.addEventListener('click', () => {
  selectedSet = 'pol';
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, selectedSet, function (response) {
      //console.log(response.farewell);
    });
  });

  //localStorage.setItem('selectedSet', 'pol');
});
flagButton.addEventListener('click', () => {
  selectedSet = 'flags';
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, selectedSet, function (response) {
      //console.log(response.farewell);
    });
  });

  //localStorage.setItem('selectedSet', 'flag');
});
hbButton.addEventListener('click', () => {
  selectedSet = 'hb';
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, selectedSet, function (response) {
      //console.log(response.farewell);
    });
  });

  //localStorage.setItem('selectedSet', 'flag');
});

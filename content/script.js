/*Sets of lists of images
*/
var politics = [
    "https://i.ibb.co/S6xnr5n/poli-trump.png",
    "https://i.ibb.co/8ByyBy2/poli-putin.png",
    "https://i.ibb.co/DzZ0hNN/poli-obama.png",
    "https://i.ibb.co/99N4hyY/poli-kim.png",
];

var flags = [
    "https://i.ibb.co/9bpq8bj/flags-usa.png",
    "https://i.ibb.co/3RzYGKJ/flags-bhr.png",
    "https://i.ibb.co/Vw2qKgt/flags-pr.png",
    "https://i.ibb.co/VpsP1Fs/flags-china.png",
];

var dogs = [
    "https://i.ibb.co/pynTy8K/dog-chichi.png",
    "https://i.ibb.co/6Xx1hLY/dog-husky.png",
    "https://i.ibb.co/T4rWzgL/dog-scruffy.png",
    "https://i.ibb.co/GVf947d/dog-bulldog.png",
];

var cats = [
    "https://i.ibb.co/1ZFy52Z/cat-moonie.png",
    "https://i.ibb.co/ZLj1Df5/cat-grumpy.png",
    "https://i.ibb.co/874q7tX/cat-tongue.png",
    "https://i.ibb.co/RT53mNF/cat-scared.png",
];

var hb = [
    "https://i.ibb.co/xM37Cvt/hb-bahar.png",
    "https://i.ibb.co/PYkKSK0/hb-noah.png",
    "https://i.ibb.co/BK1HbHT/hb-raquel.png",
    "https://i.ibb.co/fkwCfjY/hb-catu.png",
];

/*Sets the cursor depending on the selected theme.*/
function runScript(pickTheme) {

// The cursors picked
var selectedSet = pickTheme;

//Number of cursors in set
var cursorCount = pickTheme.length;

//Index of current displayed cursor
var currCursor = 0;

//The url of the selected cursor
var cursorURL = selectedSet[currCursor];

//Determines whether user is clicking and dragging
//var dragging = false;

//Cursor initally set to first cursor
document.body.style.cursor = "url('" + cursorURL + "'), auto";


/*Switches to a new cursor from the set every time the user clicks or drags mouse*/
document.addEventListener("click", () => {randCursor();});
//document.addEventListener("mousedown", () => {
    //dragging = true;
    //if (dragging) {randCursor();}});
//document.addEventListener("mousemove", () => {
    //if (dragging) {randCursor();}});
    //document.addEventListener("mouseup", () => {dragging = false});


/*Sets cursor to a random cursor from the set*/
var randCursor = ()=> {

    // Select a new random cursor index within range
    var newNum = Math.floor(Math.random() * cursorCount);

    //If the random index is set to the same current cursor
    if (newNum == currCursor) {
        if (newNum != (cursorCount - 1)) {
            //set to last cursor in set
            newNum = cursorCount - 1;
        } else {
            //if newNum is the last number, set to prev cursor
            newNum = currCursor - 1;
        }
    }

    //Set to the new number
    currCursor = newNum;
    cursorURL = selectedSet[currCursor];

    setCursor(cursorURL);
}


/*Sets the styling of the cursor to the given URL*/
var setCursor = (url) => {
    document.body.style.cursor = "url('" + url + "') 0 0, auto";}
}


/*Retrieves the selected cursor theme from the popup input*/
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

	switch (request) {
		case 'pol':
		var pickTheme = politics;
		runScript(pickTheme);
		break;
		case 'flags':
		var pickTheme = flags;
		runScript(pickTheme);
		break;
		case 'dogs':
		var pickTheme = dogs;
		runScript(pickTheme);
		break;
		case 'cats':
		var pickTheme = cats;
		runScript(pickTheme);
		break;
        case 'hb':
        var pickTheme = hb;
        runScript(pickTheme);
        break;
};

		console.log(request);
		var theme = request;
		console.log(theme);


     // sendResponse({farewell: "goodbye"});
  });

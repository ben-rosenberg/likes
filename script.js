/**
 * I really didn't want to use a non-const global variable like this, but with what I currently
 * know of JS, I didn't know of any other way to stop incrementing the number of likes after the
 * first click.
 */
var wasClickedArray = [false, false, false];

/**
 * Increments the displayed number of likes for the specified feed
 * 
 * @param {selector} numID - selector ID for the element holding the number of likes for that feed
 * @param {selector} wordID - selector ID for the element that holds the word "likes" (or "like") after the number
 * @param {number} feedIndex - Numerical index number of the feed, for tracking purposes. #feed1_num corresponds to feedIndex = 0
 */
function like(numID, wordID, feedIndex)
{
    if (wasClickedArray[feedIndex])
        return;

    var numString = document.querySelector(numID);
    var numLikes = Number(numString.innerText);
    numLikes++;

    wordString = document.querySelector(wordID);    
    wordToUse = (numLikes === 1) ? "like" : "likes";

    numString.innerText = `${numLikes}`;
    wordString.innerText = `${wordToUse}`;

    wasClickedArray[feedIndex] = true;
}


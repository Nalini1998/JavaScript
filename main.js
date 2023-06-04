// Getting Started

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// see the array we’ll be working with throughout the project
// console.log(storyWords);

//  above the .join() statement, create count variable
let count = 0;

// below count, use a .forEach() method to iterate over the storyWords
storyWords.forEach((word) => {
    count ++;
});
// log count to see how many words are in the story
console.log(count);

// Filtering Words
// reassign the storyWords variable to equal the invocation of the .filter()
storyWords = storyWords.filter((word) => {
    return word !== unnecessaryWord;
});

// Replacing Words
// Setword as a parameter of .map()‘s callback function.
storyWords = storyWords.map((word) => {
    return word === misspelledWord ? 'beautiful' : word;
});

// declaring badWordIndex variable and setting it to the invocation
let badWordIndex = storyWords.findIndex((word) => {
    return word === badWord;
});
console.log(badWordIndex);
storyWords[78] = 'really';

// define lengthCheck variable and set it to every() invocation
let lengthCheck = storyWords.every((word) => {
    return word.length <= 10;
});
console.log(lengthCheck);

// access the word longer than 10 characters
longWords = storyWords.filter((word) => {
    return word.length > 10;
});
console.log(longWords);



// Removing the word “very”
storyWords = storyWords.map((word) => {
    return word === 'very' ? '' : word;
});
console.log(storyWords)

// Place the .join() as an argument of a console.log() statement
console.log(storyWords.join(' '));
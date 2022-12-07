// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}
// Ngô Nhật Huy - 20520541
// 2. RAW TEXT STRINGS

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weights 300 pounds, and it was a hot day.'

let insertX = ['Willy the Goblin',
    'Big Daddy',
    'Father Christmas'];

let insertY = ['the soup kitchen',
    'Disneyland',
    'the White House'];

let insertZ = ['spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
// Ngô Nhật Huy - 20520541
randomize.addEventListener('click', result);


function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll(':insertx:', randomValueFromArray(insertX));
    newStory = newStory.replace(':inserty:', randomValueFromArray(insertY));
    newStory = newStory.replace(':insertz:', randomValueFromArray(insertZ));

    if (customName.value !== '') {
        var name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        var weight = Math.round(300 / 1.40000) + ' stone';
        var temperature = Math.round((94 - 32) / 1.800000) + ' centigrade';
        newStory = newStory.replace('300 pounds', Math.round(300 / 14.00000) + ' stone');
        newStory = newStory.replace('94 fahrenheit', Math.round((94 - 32) / 1.800000) + ' centigrade');
    }


    story.textContent = newStory;
    story.style.visibility = 'visible';
}
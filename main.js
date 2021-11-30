
async function newsRoom() {
// Get stories details from story id
const id = 29362912;

const storyUrl = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty'; 
console.log('Story Url', storyUrl);

const storyUrlResponse = await fetch(storyUrl);
console.log('storyUrlResponse', storyUrlResponse); 

const story = await storyUrlResponse.json();
console.log('story',story);

// How to get the IDs of the Top stories
const topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
console.log('topStoriesUrl', topStoriesUrl);

const topStoriesResponse = await fetch(topStoriesUrl);
console.log('topStoriesResponse', topStoriesResponse);

const storyIds = await topStoriesResponse.json();
console.log('storyIds', storyIds); 

// For each story Display
for (const TopStoryId of storyIds) {
console.log('TopStoryId', TopStoryId);

// Displaying in the DOM && WebPage
const body = document.querySelector('body');

const parent = document.createElement('div');
parent.className = 'parent';

const child = document.createElement('div');
child.className = 'child';
child.innerHTML = '<ol>'+ TopStoryId + '</ol>' ;
parent.appendChild(child);
body.appendChild(parent);
console.log('Parent', parent);
}
}
newsRoom();
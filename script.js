const jokes = [
    "Why don't scientists trust atoms?Because they make up everything! 😂",

"What do you call an alligator in a vest? An investigator! 🤪",

"Why did the bicycle fall over? Because it was two-tired! 😁",

"How does a penguin build its house? Igloos it together! 😀",

"What did one wall say to the other wall? I'll meet you at the corner! 😅",

"Why don't skeletons fight each other? They don't have the guts! 😂",

"What do you get when you cross a snowman and a vampire? Frostbite! 🤪",

"Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them! 😁",

"What did the janitor say when he jumped out of the closet? Supplies! 😀" ,

"Why was the math book sad? Because it had too many problems! 😅"
];
 const dis=["Next"]
function generateJoke() {
    const jokeDisplay = document.getElementById("jokeDisplay");
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeDisplay.textContent = jokes[randomIndex];
    const generateJokeBtn = document.getElementById("generateJokeBtn");
    generateJokeBtn.textContent = dis;
}
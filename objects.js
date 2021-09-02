// Ojects notes:
/*
Objects are JS data type that hold key and value pairs of data. 
 */
//curly brackets denote objects, objects REQUIRE two main attributes: *key and *value
let netflix = {
    id: 1, 
    name: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo:[{
                episode: 1,
                episodeName: 'Pilot'
            },
            {
                episode: 2,
                episodeName: 'Diversity Day'
            },
            {
                episode: 3,
                episodeName: 'Health Care'
            },
            {
                episode: 4,
                episodeName: 'The Alliance'
            },
            {
                episode: 5,
                episodeName: 'Basketball'
            }]
        }
    }
    // season2: {},
    // season3: {}
};

// Use dot and bracket notation. to console.log episodeName of episode 2
console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);
// Look up how to find index of item in a nest array of ojbects.
// console.log(netflix.season1.seasonInfo.episodeInfo.episodeName.indexOf(ep => ep.startsWith('')));

// *JSON Object
/*
-   JSON stands for: JavaScript Object Notation
-   derived from JSON syntax, JSON format is text-only. 
-   Exists as a string.
        - Useful when fetching data from a server(back-end application or logic).
        - Needs to beconvered to a native JavaScript Object if we want to access the data.
*/

// Bracket Notation / Property Accessors
// Two common Property Accessors: dot notation ( . ), bracket notation []
// Below, created a variable that stores an empty oject.
let superHero = {};

// Target object as a whole w/ bracket notation, inject/give a key which is a string
superHero['name'] = 'Spider-Man';
// Assigning a second key and value
superHero['alterEgo'] = 'Peter Parker';

console.log(superHero);
console.log(superHero['name'], superHero['alterEgo']);
console.log(superHero.name);

// All keys in objects are strings, even though they aren't wrapped in quotes, when represented in the object itself

let test = Object.keys(superHero);
console.log(test);
console.log(typeof test[0]);
// Below is setting up for Spaces Here setup. 
let spacedObject = {
    "Spaces Here": true,
    noSpaces: true,
}
// Square brackets is good when we may not be able to use dot notation, BUT it is not common.
console.log(spacedObject["Spaces Here"])
console.log(spacedObject.noSpaces);
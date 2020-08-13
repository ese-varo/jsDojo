var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop != "tracks" && value) {
    collection[id][prop] = value;
  } else if (prop == "tracks" && value) {
    // console.log('condition : ', !collection[id].hasOwnProperty(prop));
    // console.log('2nd condition: ', !collection[id][prop].length);
    if (!collection[id].hasOwnProperty(prop) || !collection[id][prop].length) {
      // console.log(collection[id][prop]);
      collection[id][prop] = [];
    }
    collection[id][prop].push(value);
  } else if (!value && collection[id].hasOwnProperty(prop)) {
    delete collection[id][prop];
  }
  return collection;
}

// console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(2548, "tracks", "Free"));

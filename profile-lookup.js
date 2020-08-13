var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
// Only change code below this line
  for (const contact of contacts) {
    // console.log(typeof name, typeof prop);
    // console.log(contact.firstName == name)
    if (contact.firstName == name) {
      if (contact[prop]) {
        console.log(contact[prop]);
        return contact[prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
// Only change code above this line
}

lookUpProfile("Kristian", "likes");




















































































kkkkkk

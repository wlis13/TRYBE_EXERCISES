const arr = ["Elephant", "Snake", "Komouri Dragon", "Cheetah"];
const str = "I am study web development and my name is Wlisses, welcome in my workspace!";

const getTwoFirstElements = arr.slice(0, 2);
const getTwoHalfElements = arr.slice(1, 3);
arr.splice(2, 0, "Monkey"); // add Monkey in thee position

const startIndex = str.indexOf("development");
const endIndex = str.indexOf(" ", startIndex);
const getDevelopmentWord = str.substring(startIndex, endIndex)

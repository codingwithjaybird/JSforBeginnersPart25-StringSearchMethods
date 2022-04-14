// STRING SEARCH METHODS

// String indexOf()
let str1 = "This demonstrates my first search method.";
let ans1 = str1.indexOf("demo");
console.log(ans1);

// String lastIndexOf()
let str2 = "My duck Tim is a very smart duck!";
console.log(str2.lastIndexOf("duck"));

console.log(str2.lastIndexOf("Bird"));

// String search()
let str3 = "Learn to code.";
console.log(str3.search("to"));

// String includes()
let str4 = "Coding with JayBird!";
console.log(str4.includes("JayBird"));

console.log(str4.includes("Coding", 4));

// String startsWith()
let str5 = "I like JavaScript";
console.log(str5.startsWith("like"));
console.log(str5.startsWith("like", 2));


// String endsWith()
let str6 = "This is a great channel";
console.log(str6.endsWith("channel"));
console.log(str6.endsWith("channe"));

console.log(str6.endsWith("This", 4));

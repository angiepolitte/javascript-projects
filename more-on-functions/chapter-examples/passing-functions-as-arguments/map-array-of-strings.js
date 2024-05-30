let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstLetter = function (index) { 
    return index[0];
};
     
let firstInitials = names.map(firstLetter);

console.log(firstInitials);

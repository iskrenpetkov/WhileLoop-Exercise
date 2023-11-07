function oldBooks(input) {
    let index = 0;
    let searchBook = input[index]
    index++
    let nextBook = input[index]
    index++;
    let isFound = false
    let bookCounter = 0

    while (nextBook !== "No More Books") {
        

        if (searchBook === nextBook) {
            isFound = true;
            break;
        }
        bookCounter++;
        
        nextBook = input[index];
        index++

    }

    if (isFound) {
        console.log(`You checked ${bookCounter} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    }
}
oldBooks(["The Spot",

    "Hunger Games",

    "Harry Potter",

    "Torronto",

    "Spotify",

    "No More Books"])
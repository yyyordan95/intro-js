function countLetter([string, letter]){
    let count = 0;

    for(let char of string){
        if(char == letter){
            count++;
        }
    }

    console.log({count});
}

countLetter(['hello', 'l']);

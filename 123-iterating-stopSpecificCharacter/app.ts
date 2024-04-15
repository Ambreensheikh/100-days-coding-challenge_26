function findVowel(text: string):string| undefined {
    let vowels = ['a', 'e', 'i', 'o','u'];
    for(let i = 0; i < text.length; i++){
    if(vowels.includes(text[i])){
        return undefined;
    }
    }
}
let text = "Hello World !";
let firstvowel = findVowel(text);
if(firstvowel){console.log(`The first vowel "${text}" is : ${firstvowel}`);

}else{
   console.log( `not first vowel found in "${text}" `);
}
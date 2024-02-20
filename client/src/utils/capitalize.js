export default function Capitalize(word){
    let firstLetter = word.charAt(0);
    let remainingLetter = word.slice(1);

    firstLetter = firstLetter.toUpperCase();

    return firstLetter + remainingLetter;
}
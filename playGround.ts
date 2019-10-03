import fs from 'fs'

const book = {
    title: "Ego is the enemy", 
    describtion: "Ego ya wala"
}
fs.writeFileSync('playGround.json', JSON.stringify(book));

const buffer = fs.readFileSync('playGround.json');
const bufferStr = buffer.toString();

const changedData = JSON.parse(bufferStr).title = "Egoooo is the enemy";
fs.appendFileSync('playGround.json', JSON.stringify(changedData));

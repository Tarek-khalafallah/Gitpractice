import fs from 'fs'


export const addNotes = (title, body) => {
    const notes = loadNotes();
    const matches = notes.filter(el => el.title === title)
    if(!matches.length){
        notes.push({
            title: title,
            body: body
        });
        fs.writeFileSync('notes.txt',JSON.stringify(notes));
    }
    else {
        console.log("the title is taken");
    }

}

const loadNotes = () => {
    try{
        const notesStr = fs.readFileSync('notes.txt').toString();
        return JSON.parse(notesStr);
    }
    catch(ex){
        return [];
    }
}
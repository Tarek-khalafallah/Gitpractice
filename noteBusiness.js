"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
exports.addNotes = (title, body) => {
    const notes = loadNotes();
    const matches = notes.filter(el => el.title === title);
    if (!matches.length) {
        notes.push({
            title: title,
            body: body
        });
        fs_1.default.writeFileSync('notes.txt', JSON.stringify(notes));
    }
    else {
        console.log("the title is taken");
    }
};
const loadNotes = () => {
    try {
        const notesStr = fs_1.default.readFileSync('notes.txt').toString();
        return JSON.parse(notesStr);
    }
    catch (ex) {
        return [];
    }
};
//# sourceMappingURL=noteBusiness.js.map
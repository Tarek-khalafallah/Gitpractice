"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const book = {
    title: "Ego is the enemy",
    describtion: "Ego ya wala"
};
fs_1.default.writeFileSync('playGround.json', JSON.stringify(book));
const buffer = fs_1.default.readFileSync('playGround.json');
const bufferStr = buffer.toString();
const changedData = JSON.parse(bufferStr).title = "Egoooo is the enemy";
fs_1.default.appendFileSync('playGround.json', JSON.stringify(changedData));
//# sourceMappingURL=playGround.js.map
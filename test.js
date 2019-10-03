"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const notesBusiness = __importStar(require("./noteBusiness"));
yargs_1.default.command({
    command: 'add',
    builder: {
        title: {
            demandOption: true,
            type: "string",
        },
        body: {
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => notesBusiness.addNotes(argv.title, argv.body)
});
yargs_1.default.parse();
//# sourceMappingURL=test.js.map
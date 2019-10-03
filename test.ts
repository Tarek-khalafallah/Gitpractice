import yargs from 'yargs'
import * as notesBusiness from './noteBusiness'

yargs.command({
    command: 'add',
    builder: {
        title:{
            demandOption: true,
            type: "string",           
        },
        body:{
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => notesBusiness.addNotes(argv.title, argv.body) 
})

yargs.parse();

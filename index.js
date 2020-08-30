const contactsFunctions = require("./contacts");

const { argv } = require("yargs");
const { listContacts } = require("./contacts");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactsFunctions.listContacts().then(console.log);
      break;

    case "get":
      contactsFunctions.getContactById(id).then(console.log);
      break;

    case "add":
      contactsFunctions.addContact(name, email, phone).then(console.log);
      break;

    case "remove":
      contactsFunctions.removeContact(id).then(console.log);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

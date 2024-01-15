const { program } = require("commander");
const contacts = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const list = await contacts.listContacts(id);
      console.table(list);
      // ...
      break;

    case "get":
      // ... id
      const getBook = await contacts.getContactById(id);
      console.log(getBook);
      break;

    case "add":
      // ... name email phone
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      // ... id
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({ action: "add", name: "victoria", email: "victoria@.com", phone: "223-44-33" });
invokeAction({ action: "remove", id: "Vme2Wl9lwgInLXFPFN4sO" });

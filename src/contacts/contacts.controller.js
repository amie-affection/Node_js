exports.addContact = (req, res, next) => {   
    const newContact = ContactModel.addContact(req.body);
    res.status(201).send(newContact);
}
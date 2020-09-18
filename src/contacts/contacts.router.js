// CRUD
const { Router } = require("express");
const Joi = require("joi");
const { validate } = require("../helpers/validate");
const {
  addContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
} = require("./contacts.controller");

const router = Router();

// 1. Create
const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

router.post("/", validate(addContactSchema), addContact);

// 2. Read
router.get("/", getContacts);

router.get("/:contactId", getContact);

// 3. Update
const updateContactSchema = Joi.object({
  email: Joi.string(),
  username: Joi.string(),
}).min(1);

router.put("/:contactId", validate(updateContactSchema), updateContact);

// 4. Delete
router.delete('/:contactId', deleteContact);

exports.contactsRouter = router;

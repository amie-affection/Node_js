// CRUD
const { Router } = require("express");
const Joi = require("joi");
const { validate } = require("../helpers/validate");
const { addContact } = require("./contacts.controller");

const router = Router();

// 1. Create
const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

router.post("/", validate(addContactSchema), addContact);

exports.contactsRouter = router;

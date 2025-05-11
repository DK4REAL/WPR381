// utils/dataManager.js

const contactSubmissions = [];
const eventRegistrations = [];

function saveContact(contact) {
  contactSubmissions.push({ ...contact, date: new Date() });
}

function getAllContacts() {
  return contactSubmissions;
}

module.exports = {
  saveContact,
  getAllContacts,
};

/*module.exports = {
  // Contact
  addContact: (entry) => contactSubmissions.push(entry),
  getContacts: () => contactSubmissions,
  clearContacts: () => (contactSubmissions.length = 0),

  // Events
  addEventRegistration: (entry) => eventRegistrations.push(entry),
  getEventRegistrations: () => eventRegistrations,
  clearEventRegistrations: () => (eventRegistrations.length = 0),
};*/

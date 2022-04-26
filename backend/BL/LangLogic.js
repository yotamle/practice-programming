const LangController = require("../DL/controllers/LangController")




async function create(data) {
  return await LangController.create(data)
}

async function read(lang_id) {
  return await LangController.read({lang_id})
}

async function update(data) {
  data.lastSeen = Date.now()
  return await LangController.update(data._id, data)
}

module.exports = {
  ...LangController,
  create,
  read,
  update,
}


const ExerciseController = require("../DL/controllers/ExerciseController")



async function create(data) {
     return await ExerciseController.create(data)
}

async function read(_id) {
      let filter = _id ? { _id } : {}
    return await ExerciseController.read(filter)
}
async function readByLang(prog_lang) {
    return await ExerciseController.read({ prog_lang: prog_lang}) 
}

async function update(_id,data) {
    data.lastSeen = Date.now()
    return await ExerciseController.update(_id, data)
}


module.exports = {
    ...ExerciseController,
    create,
    read,
    readByLang,
    update
}
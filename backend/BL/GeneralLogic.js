const UserLogic = require("./UserLogic")
const ExerciseLogic = require("./ExerciseLogic")
const LangLogic = require("./LangLogic")


async function getSingleExercise(_id) {
    const exercise = await ExerciseLogic.read(_id)
    let c_id = exercise[0].creator_id
    const user = await UserLogic.read({_id: c_id})

    return {
        exercise,
        user
    }
}


module.exports = {
    getSingleExercise
}
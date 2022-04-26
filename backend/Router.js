const UserLogic = require("./BL/UserLogic")
const ExerciseLogic = require("./BL/ExerciseLogic")
const LangLogic = require("./BL/LangLogic")
const GeneraLogic = require("./BL/GeneralLogic")
const jwt = require("jsonwebtoken")

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "2H" })
}

module.exports = (app) => {
  //*read - user
  //*CRUD - single Exercise
  //*Read - exercises
  //*read lang

  //*Read Users (For Test) V
  app.get("/user", async (req, res) => {
    res.send(await UserLogic.read())
  })

  //*Login
  app.post("/login", async (req, res) => {
    const { email, password } = req.body
    let result
    try {
      result = await UserLogic.login(email, password)
      res.status(200).json({
        id: result._id,
        name: result.name,
        email: result.email,
        permission: result.permission,
        lastSeen: result.lastSeen,
        profile_pic: result.profile_pic,
        token: generateToken(result._id),
      })
    } catch (error) {
      result = {
        status: 400,
        message: error.message || error,
      }
      res.send(result)
    }
  })

  //*Register V
  app.post("/register", async (req, res) => {
    let result
    try {
      result = await UserLogic.register(req.body)
       res.status(200).json({
         id: result._id,
         name: result.name,
         email: result.email,
         permission: result.permission,
         lastSeen: result.lastSeen,
         profile_pic: result.profile_pic,
         token: generateToken(result._id),
       })
    } catch (error) {
      result = {
        status: 400,
        message: error.message || error,
      }
      res.send(result)
    }
  })

  //! Create Exercise
  app.post("/new-exercise", async (req, res) => {
    try {
      let result = await ExerciseLogic.create(req.body)
      res.send(result)
    } catch (error) {
      res.send({
        status: 400,
        message: error.message || error,
      })
    }
  })

  //*Read Exercise
  app.get("/exercise/:id?", async (req, res) => {
    let result
    try {
      if (req.params.id) {
        result = await GeneraLogic.getSingleExercise(req.params.id)
      } else {
        result = await ExerciseLogic.read()
      }
    } catch (error) {
      result = {
        status: 400,
        message: error.message || error,
      }
    }
    res.send(result)
  })

  //* Exercise by languages
  app.get("/exercisebylang/:prog_lang", async (req, res) => {
    const { prog_lang } = req.params
    let result
    try {
      result = await ExerciseLogic.readByLang(prog_lang)
    } catch (error) {
      result = {
        status: 400,
        message: error.message || error,
      }
    }
    res.send(result)
  })

  //!update Exercise
  app.put("/update-exercise/:id", async (req, res) => {
    const { id } = req.params
    let result
    try {
      result = await ExerciseLogic.update(id, req.body)
      res.send(result)
    } catch (error) {
      result = {
        status: 400,
        message: error.message || error,
      }
    }
  })

  //?delete Exercise cant remove only update to delete
  app.put("/remove-exercise/:id", async (req, res) => {
    const { id } = req.params
    let result
    try {
      result = await ExerciseLogic.remove(id)
      res.send(result)
    } catch (error) {
      result = {
        status: 400,
        message: error.message || error,
      }
    }
  })

  //*Read Lang
  app.get("/lang", async (req, res) => {
    res.send(await LangLogic.read())
  })

  //* Create Lang
  app.post("/newlang", async (req, res) => {
    let result
    try {
      result = await LangLogic.create(req.body)
      res.send(result)
    } catch (error) {
      result = {
        status: 400,
        message: error.message || error,
      }
    }
  })
}

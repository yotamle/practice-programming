const UserController = require("../DL/controllers/UserController")
const bcrypt = require("bcryptjs")

async function create(data) {
  if (!data.email?.includes("@")) throw "you forgot to put @"
  return await UserController.create(data)
}

async function update(data) {
  data.lastSeen = Date.now()
  return await UserController.update(data._id, data)
}

async function register(data) {
  //Validation
  const userExists = await UserController.findOne({ email: data.email})
   if (userExists) {
     throw "אימייל זה קיים במערכת"
   }
  if (!data.name || !data.email || !data.password) {
    throw "Please include all fields"
  }
  // Hash password
  data.password = bcrypt.hashSync(data.password)
  return await create(data)
}

async function login(email, password) {
  //Validation
  const user = (await UserController.read({ email }, "+password"))[0]
  if (!user) throw "שם משתמש או סיסמה שגויה"
  //throw 'No such user'
  if (!bcrypt.compareSync(password, user.password))
    throw "שם משתמש או סיסמה שגויה"

  return update(user)
}

module.exports = {
  ...UserController,
  create,
  update,
  register,
  login,
}

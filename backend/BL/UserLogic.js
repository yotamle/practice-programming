const UserController = require("../DL/controllers/UserController")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function create(data) {
  if (!data.email?.includes("@")) throw "you forgot to put @"

  return await UserController.create(data)
}

async function update(data) {
  data.lastSeen = Date.now()
  return await UserController.update(data._id, data)
}

async function register(data) {
  //  if (!data.firstName || !data.lastName)
  //    throw "first and last name are required!"
  //  data.name = `${data.firstName} ${data.lastName}`

  data.password = bcryptjs.hashSync(data.password)

  return await create(data)
}

async function login(email, password) {
  const user = (await UserController.read({ email }, "+password"))[0]
  
  
  
  if (!user) throw "email or password invalid"
  //throw 'No such user'
  
  if (!bcryptjs.compareSync(password, user.password))
  throw "email or password invalid"
  
  const token = jwt.sign({
    id: user._id,
  },"YotamLevy",{ expiresIn:"1H"})

  user.token = token
  update(user)
  const userToken = (await UserController.read({ email }, "+token"))[0]
  return userToken
}

module.exports = {
  ...UserController,
  create,
  update,
  register,
  login,
}

const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const UserController = require("./controller/UserContoller");
// connecting db
require("./config/db").connect();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
  // get all users route
  // http://localhost:4000/api/users (method=get)
  app.get("/", UserController.getAllUsers);

  //add one user route
  // http://localhost:4000/api/users  (method=post)
  app.post("/", UserController.addOneUser);

  // edit user by id
  // htpp://localhost:4000/api/users/:id (method=put)
  app.put("/:id", UserController.updateUserById);

  // DELETE user by id
  // htpp://localhost:4000/api/users/:id
  app.delete("/:id", UserController.deleteUserByUd);


app.listen(PORT, () => console.log(`app started on port ${PORT}`));









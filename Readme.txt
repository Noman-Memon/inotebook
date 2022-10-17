-------------------create Backend-------------------------
1. install mongoDB
2. create react app (npx create-react-app name)
3. add folder name(backend)
4. cd backend
	1.npm init
		pakadge name: inotebook-backend
		description: notebook on the cloud
		(now pakadge.json will be automatically created)
	2. npm i express
	3. npm i mongoose
	4. npm i g nodemon
	Adding validations
	5. npm install --save express-validator
	6. npm install bcryptjs(use for creating salt or hash)
	7. npm i jsonwebtoken
1. create index.js (entry point) (actualy a express server)
set node_modules folder in gitignore.
2. create db.js(connection with mongo database) (check connection status by nodemon ./index.js)
3. get boilerplate code from expressjs
-------------------------------------------------------------------------------
4. craete models folder
	(create schema)
	1.Notes.js
	2.User.js
5. create routes folder
	1.auth.js 	(const { body, validationResult } = require('express-validator');)
			(const bcrypt = require('bcryptjs')
			(const jwt = require('jsonwebtoken')
			(const fatchuser = require('../middleware/fetchuser'))
			(const User = require('../models/User')
	create 3 routes 
		1.createuser
		2.login
		3.getuser 
	2.notes.js	(const fatchuser = require('../middleware/fetchuser'))
			(const Notes = require('../models/Notes')
			(const { body, validationResult } = require('express-validator')
6. create middleware folder
	1.fetchuser.js	((const jwt = require('jsonwebtoken'))
Note:*** If we want to use request.body we use middle where that is (app.use(express.jason());
-----------------------------------------------------------------------------------
-------------------------Create Frontend(React App)----------------------
1. npm install react-router-dom
2. npm install concurrently ("both": "concurrently \"npm run start\" \"nodemon backend/index.js\""(add this in package.json--->"scripts"))
3. npm run both (start client and server both)
4. create components
	Navbar.js
	Home.js
	About.js
5. set router by react-router-dom (must use 'exact' before evry path)
--------------------------create context API------------------------------
1. create folder in src(context)-->folder(notes)-->
	create Two fils
	1.noteContext.js (import {createContext} from "react")
	2.NoteState.js  (import NoteContext from "./noteContext")
**Note:enclosed all routes in App.js this like e.g.:<NoteState>.....<NoteState/>
  by this we have enable to use state value in this component or any component

2. if we want to use this context any component e.g.About.js then "import {useContext} from react"
					      "import noteContext from "../context/notes/noteContext"" in this component
--------------------------------------------------------------------------------

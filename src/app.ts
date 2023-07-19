import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
// import usersService from './app/modules/users/users.service'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
console.log('lekt')
app.use('/api/v1/user', usersRouter)

app.get('/', (req: Request, res: Response) => {
  console.log('conl')
  //   await usersService.createUser({
  //     id: '333',
  //     password: "kdiekd",
  //     role: "student"
  // })
  res.send('Hello World!')
})

export default app

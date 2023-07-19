import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generatedId } from './users.utilies'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated id
  const id = await generatedId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.student_default_pass as string
  }

  const createUser = await User.create(user)
  if (!createUser) {
    throw new Error('User not create')
  }
  return createUser
}

export default {
  createUser,
}

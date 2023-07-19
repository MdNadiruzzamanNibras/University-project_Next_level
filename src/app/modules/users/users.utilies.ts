import { User } from './users.model'

export const findUserID = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createAt: -1 })
    .lean()
  return lastUser?.id
}

export const generatedId = async () => {
  const currentID = (await findUserID()) || (0).toString().padStart(5, '0')
  const incrementId = (parseInt(currentID) + 1).toString().padStart(5, '0')
  return incrementId
  // lastUserId++
  // return String(lastUserId).padStart(5,'0')
}

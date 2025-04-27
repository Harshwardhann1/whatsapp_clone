import User from "../model/user.js"

export const addUser= async (request, response) => {
  try{
    let exists = await User.findOne({ sub: request.body.sub})
    if(exists) {
      return response.status(200).json({ message: 'User already exists.'})
    }

    const newUser = new User(request.body);
    await newUser.save();
    return response.status(200).json(newUser)
  } catch(error) {
    return response.status(404).json({message: 'User not found.'})
  }
}

export const getUsers = async(request, response) => {
  try {
    const users = await User.findOne({});
    return response.status(200).json(users)
  } catch (error) {
    return response.status(200).json(error.message)
  }
}
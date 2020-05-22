import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public async index () {
    const users = await User.all()

    return users
  }

  public async show ({params}: HttpContextContract) {
    const {id} = params

    const user = await User.findOrFail(id)

    return user
  }

  public async store ({request}: HttpContextContract) {
    const data = request.only(['name', 'email'])

    const user = await User.create(data)

    return user
  }

  public async update ({params, request, response}: HttpContextContract) {
    const {id} = params
    const {name, email} = request.only(['name', 'email'])

    const user = await User.findOrFail(id)

    if (email && email !== user.email) {
      const emailInUse = (await User.query().where({email})).length

      if (emailInUse) {
        return response.status(400).send('email already exists')
      }
    }

    user.merge({name, email})

    user.save()

    return user
  }
}

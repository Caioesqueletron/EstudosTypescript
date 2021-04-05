import {Request, Response} from 'express'
import createUser from './services/CreateUser'
export function helloWorld(request: Request, response: Response){
    const user = createUser({name:'Caio', email:'caio@teste.com',password:'123',
    techs: [{title:'nodeJS',experience: 130}]
})
    return response.json({message: 'hello world'})
}
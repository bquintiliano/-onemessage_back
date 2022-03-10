import database from '../models'
import { v4 as uuidv4 } from 'uuid';

class messageControllers{

    static async createMessage(request, response){
        const { message } = request.body

        const id = uuidv4()

        try{
            await database.Messages.create({id: id , message: message, read: false})

            return response.status(200).json(id)
        }
        catch(error){
            return response.status(500).json(error.message)
        }
    }

    static async readMessage(request, response){
        const { id } = request.params
        
        try{
            const data = await database.Messages.findOne({where:{id:id}})
           
            if(data){
                await database.Messages.destroy({where:{id:id}})
                return response.status(200).json(data.message)
            }
        
            return response.status(400).json({msg: "Mensagem não existe"})

        }
        catch(error){
            return response.status(500).json(error.message)
        }

    }


}

export default messageControllers
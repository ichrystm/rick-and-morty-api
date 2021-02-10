import { Request, Response} from 'express'
import fetch from 'node-fetch'

const url = 'https://rickandmortyapi.com/graphql'

class Characters {

    async getCharByName(req: Request, res: Response){
      const name = req.params.name
      const response = await fetch(url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: 
            JSON.stringify({ query:
                `
                query {
                  characters(filter: {name: "${name}"}) {
                    results {
                      id
                      name
                      species
                      image
                    }
                  }
                }
                `
            })
      })
      const chars = await response.json()
      if(chars.data.characters == null){
          res.status(400).send({
              Error: "Invalid parameters"
          })
      }else{
        res.status(200).send(chars.data.characters.results)
      }
    }
}

export default new Characters()
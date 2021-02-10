import { Router } from 'express'

import charactersController from '../controllers/characters'

const router = Router()

router.get('/', (req, res) => {
    res.json({
        Message: "Hello Morty!"
    })
})

router.get('/characters/:name', charactersController.getCharByName)

export { router }
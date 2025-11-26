const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

// index - visualizzare tutti gli elementi
router.get('/', postController.index);

// show - visualizzare l'elemento
router.get('/:id', postController.show);

// store - creare un nuovo elemento
router.post('/', postController.store);

// update - aggiornare più parti di un elemento o interamente
router.put('/:id', postController.update);

// modify - modificare una singola parte di un elemento
router.patch('/:id', postController.modify);

// destroy - eliminare un post
router.delete('/:id', postController.destroy);


module.exports = router;




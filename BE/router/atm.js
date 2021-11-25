const router = require('express').Router();
const { Authenticate } = require('../middleWares/auth');
const {postAtm, deleteAtm, getAtms, addPeople ,getQueue ,processedClients} = require('../controller/atm')

router.post('/', Authenticate, postAtm);
router.post('/people', Authenticate, addPeople);
router.get('/', Authenticate, getAtms);
router.get('/queue', Authenticate, getQueue);
router.get('/processClient', Authenticate, processedClients);
router.delete('/:atmId', Authenticate, deleteAtm);

module.exports = router;
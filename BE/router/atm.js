const router = require('express').Router();
const { Authenticate } = require('../middleWares/auth');
const {postAtm, deleteAtm, getAtms, addPeople ,getQueue ,processedClients} = require('../controller/atm')

router.post('/', Authenticate, postAtm);

router.get('/', Authenticate, getAtms);

router.delete('/:atmId', Authenticate, deleteAtm);



router.get('/queue', Authenticate, getQueue);
router.get('/processClient', Authenticate, processedClients);
router.post('/people', Authenticate, addPeople);


module.exports = router;
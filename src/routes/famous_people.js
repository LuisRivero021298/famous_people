const { Router } = require('express');
const router = Router();

const famousPeopleController = require('../controllers/FamousPeopleController');

router.get('/famous_people/:last?', famousPeopleController.getFamousPeople);
router.get('/famous_people/profession/:profession', famousPeopleController.getFamousPeopleByProfession);
router.get('/famous_people/sex/:sex', famousPeopleController.getFamousPeopleBySex);
router.get('/famous_people/name/:name', famousPeopleController.getFamousPeopleByName);
router.get('/get_image/:image', famousPeopleController.getImage);

module.exports = router;
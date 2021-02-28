import {Router} from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UsersController } from './controllers/UsersController';
import { SendMailController } from './controllers/SendMailConroller';

const router = Router();

const usersController = new UsersController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

router.post("/users", usersController.create);
router.get("/users", usersController.show);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailController.execute);

export {router};
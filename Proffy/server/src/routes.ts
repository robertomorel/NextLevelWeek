import express from 'express';
import { celebrate, Joi } from 'celebrate';

//import multer from 'multer';
//import multerConfig from './config/multer';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router(); 
//const upload = multer(multerConfig);

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post(
  '/classes', 
  /*
  upload.single('image'), 
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      avatar: Joi.string().required().email(),
      whatsapp: Joi.string().required(),
      bio: Joi.string().required(),
      subject: Joi.string().required(),
      cost: Joi.number().required(),
      schedule: Joi.array().required().max(2),
    })
  }, {
    abortEarly: false
  }),
  */
  classesController.create
);

routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;

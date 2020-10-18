import { Router } from 'express';
import {AuthenticateUserService} from '../services/AuthenticateUserService';

const SessionsRouter = Router();

SessionsRouter.post('/', async (request, response) => {

  try {
    const {email, password} = request.body;

    const authenticate = new AuthenticateUserService();

    const {user, token} = await authenticate.execute({
      email,
      password
    });

    return response.json({user, token});
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }

});

export default SessionsRouter;
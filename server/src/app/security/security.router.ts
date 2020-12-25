import express from 'express';
import security from './security';
import authMiddleware from './auth/auth.middleware';
import limiter from '../core/limiter';

const securityRouter = express.Router();
const localMiddleware = security.authenticate('local', { session: true });

securityRouter.use(limiter);

securityRouter.post('/userinfo', authMiddleware, (req, res) => {
    return res.json(res.locals.user);
});

securityRouter.post('/login', localMiddleware, (req, res) => {
    return res.sendStatus(200);
});

securityRouter.post('/logout', authMiddleware, (req, res) => {
    res.clearCookie('jwt');
    return res.sendStatus(200);
});

export default securityRouter;

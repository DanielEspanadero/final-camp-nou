import { Router } from 'express';

import { findPlayers } from '../controllers/player';

const router = Router();

router.get('/', findPlayers);

export default router;
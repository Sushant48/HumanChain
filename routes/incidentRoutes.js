import express from 'express';
import {
  getAllIncidents,
  getIncidentById,
  createIncident,
  deleteIncident,
} from '../controllers/incidentController.js';

const router = express.Router();

router.get('/', getAllIncidents);

router.post('/', createIncident);

router.get('/:id', getIncidentById);

router.delete('/:id', deleteIncident);

export default router;

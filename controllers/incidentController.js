import Incident from '../models/incidentModel.js';

export const getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find().sort({ reported_at: -1 });
    res.status(200).json(incidents);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }
    res.status(200).json(incident);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const createIncident = async (req, res) => {
  const { title, description, severity } = req.body;

  if (!title || !description || !severity) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const allowedSeverities = ['Low', 'Medium', 'High'];
  if (!allowedSeverities.includes(severity)) {
    return res.status(400).json({ error: 'Invalid severity value' });
  }

  try {
    const newIncident = await Incident.create({ title, description, severity });
    res.status(201).json(newIncident);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const deleteIncident = async (req, res) => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }
    res.status(200).json({ message: 'Incident deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

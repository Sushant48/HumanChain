import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Incident from './models/incidentModel.js';
import { DB_NAME } from './constants.js';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedIncidents = async () => {
  await connectDB();

  try {

    const sampleIncidents = [
      {
        title: 'AI misclassification in facial recognition',
        description: 'Facial recognition system falsely flagged a person as a criminal.',
        severity: 'High',
      },
      {
        title: 'Bias in AI recruitment tool',
        description: 'AI-based hiring software showed bias against women applicants.',
        severity: 'Medium',
      },
      {
        title: 'Incorrect medical diagnosis',
        description: 'AI health app recommended wrong treatment for a common flu case.',
        severity: 'Low',
      },
    ];

    await Incident.insertMany(sampleIncidents);
    console.log('Sample incidents seeded!');
    process.exit();
  } catch (error) {
    console.error(`Seeding error: ${error}`);
    process.exit(1);
  }
};

seedIncidents();

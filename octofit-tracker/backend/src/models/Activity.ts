import mongoose from 'mongoose';

export interface ActivityDocument extends mongoose.Document {
  title: string;
  duration: number;
  user: string;
  date: Date;
}

const activitySchema = new mongoose.Schema<ActivityDocument>(
  {
    title: { type: String, required: true },
    duration: { type: Number, required: true },
    user: { type: String, required: true },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Activity = mongoose.model<ActivityDocument>('Activity', activitySchema);
export default Activity;

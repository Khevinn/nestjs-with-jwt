/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
});

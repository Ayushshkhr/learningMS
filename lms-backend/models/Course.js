import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: {type: String, required: true},
description: String,
instructor: String,
createdAt: {type: Date, default: Date.now}
});

export default mongoose.model('Course', courseSchema);
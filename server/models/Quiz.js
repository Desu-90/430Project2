const mongoose = require('mongoose');
const _ = require('underscore');

const setName = (name) => _.escape(name).trim();

const QuizSchema = new mongoose.Schema({
  quizName: {
    type: String,
    required: true,
    trim: true,
    set: setName,
  },

  id: {
    type: Number,
    required: true,
  },

  words: {
    type: Object,
    required: true,
    trim: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

QuizSchema.statics.toAPI = (doc) => ({
    quizName: doc.quizName,
    id: doc.id,
    words: doc.words,
});

const QuizModel = mongoose.model('Quiz', QuizSchema);
module.exports = QuizModel;

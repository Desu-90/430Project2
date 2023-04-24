const mongoose = require('mongoose');

const FlashSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  jWord: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  quizId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Quiz'
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

FlashSchema.statics.toAPI = (doc) => ({
  word: doc.word,
  jWord: doc.jWord,
});

const FlashModel = mongoose.model('Flash', FlashSchema);
module.exports = FlashModel;

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PostSchema = new Schema({
  content: String,
  creatorId: { type: Schema.Types.ObjectId, ref: 'User' },
  pic_path: String,
  pic_name: String
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;

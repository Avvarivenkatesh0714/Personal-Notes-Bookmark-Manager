const Bookmark = require('../models/Bookmark');
const fetchBookmarkMetadata = require('../utils/fetchBookmarkMetadata');

exports.createBookmark = async (req, res) => {
  try {
    const { url, title, ...rest } = req.body;
    let metadataTitle = title;
    if (!title) {
      metadataTitle = await fetchBookmarkMetadata(url);
    }
    const bookmark = await Bookmark.create({ url, title: metadataTitle, userId: req.user.id, ...rest });
    res.status(201).json(bookmark);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBookmarks = async (req, res) => {
  const { q, tags } = req.query;
  const query = { userId: req.user.id };
  if (q) query.title = { $regex: q, $options: 'i' };
  if (tags) query.tags = { $in: tags.split(',') };
  const bookmarks = await Bookmark.find(query);
  res.json(bookmarks);
};

exports.getBookmarkById = async (req, res) => {
  const bookmark = await Bookmark.findOne({ _id: req.params.id, userId: req.user.id });
  if (!bookmark) return res.status(404).json({ error: 'Bookmark not found' });
  res.json(bookmark);
};

exports.updateBookmark = async (req, res) => {
  const bookmark = await Bookmark.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  if (!bookmark) return res.status(404).json({ error: 'Bookmark not found' });
  res.json(bookmark);
};

exports.deleteBookmark = async (req, res) => {
  const bookmark = await Bookmark.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  if (!bookmark) return res.status(404).json({ error: 'Bookmark not found' });
  res.json({ message: 'Bookmark deleted' });
};

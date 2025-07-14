const axios = require('axios');
const cheerio = require('cheerio');

const fetchBookmarkMetadata = async (url) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  return $('title').text() || 'Untitled';
};

module.exports = fetchBookmarkMetadata;
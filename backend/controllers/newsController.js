const { newsItems, categories, channels, tags } = require('../data/mockData');

// 获取新闻分页列表
const getNewsPageList = (req, res) => {
  const { categoryCode, channelCode, tag, keyword, pageNum = 1, pageSize = 10 } = req.query;
  
  // 过滤新闻
  let filteredNews = [...newsItems];
  
  if (categoryCode) {
    filteredNews = filteredNews.filter(news => news.category === categoryCode);
  }
  
  if (keyword) {
    filteredNews = filteredNews.filter(news => 
      news.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }
  
  // 分页
  const startIndex = (pageNum - 1) * pageSize;
  const endIndex = startIndex + parseInt(pageSize);
  const paginatedNews = filteredNews.slice(startIndex, endIndex);
  
  res.status(200).json({
    counts: filteredNews.length,
    pagesize: parseInt(pageSize),
    pages: Math.ceil(filteredNews.length / pageSize),
    page: parseInt(pageNum),
    items: paginatedNews
  });
};

// 获取推荐新闻
const getNewsRecommend = (req, res) => {
  // 返回第一条新闻作为推荐
  if (newsItems.length > 0) {
    res.status(200).json(newsItems[0]);
  } else {
    res.status(404).json({ message: 'No news available' });
  }
};

// 获取分类列表
const getCategories = (req, res) => {
  res.status(200).json(categories);
};

// 获取频道列表
const getChannels = (req, res) => {
  res.status(200).json(channels);
};

// 获取标签列表
const getTags = (req, res) => {
  res.status(200).json(tags);
};

module.exports = {
  getNewsPageList,
  getNewsRecommend,
  getCategories,
  getChannels,
  getTags
};
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// 新闻相关路由
router.get('/', newsController.getNewsPageList);
router.get('/recommend', newsController.getNewsRecommend);

// 分类相关路由
router.get('/categories', newsController.getCategories);

// 频道相关路由
router.get('/channels', newsController.getChannels);

// 标签相关路由
router.get('/tags', newsController.getTags);

module.exports = router;
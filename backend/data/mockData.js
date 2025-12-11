// 模拟用户数据
const users = [
  {
    id: 1,
    email: 'test@qq.com',
    password: 'e95a86cfbe9784075de7e5e83268b5130ed52aece72264c6aaea5e3a1543a37b',
    displayName: 'Test User',
    channels: ['cnn', 'bbc']
  }
];

// 模拟新闻分类
const categories = [
  { code: 'technology', title: 'Technology' },
  { code: 'business', title: 'Business' },
  { code: 'sports', title: 'Sports' },
  { code: 'entertainment', title: 'Entertainment' },
  { code: 'health', title: 'Health' }
];

// 模拟新闻频道
const channels = [
  { code: 'cnn', title: 'CNN' },
  { code: 'bbc', title: 'BBC News' },
  { code: 'fox', title: 'Fox News' },
  { code: 'nbc', title: 'NBC News' },
  { code: 'rt', title: 'RT' },
  { code: 'bloomberg', title: 'Bloomberg' }
];

// 模拟新闻标签
const tags = [
  { tag: 'flutter' },
  { tag: 'dart' },
  { tag: 'mobile' },
  { tag: 'programming' },
  { tag: 'tech' }
];

// 模拟新闻数据
const newsItems = [
  {
    id: '1',
    title: 'Flutter 3.0 Released with Major Performance Improvements',
    category: 'technology',
    thumbnail: 'https://example.com/flutter3.jpg',
    author: 'John Doe',
    addtime: '2023-05-10T10:00:00.000Z',
    url: 'https://example.com/flutter3-release'
  },
  {
    id: '2',
    title: 'Global Markets Reach New Highs',
    category: 'business',
    thumbnail: 'https://example.com/markets.jpg',
    author: 'Jane Smith',
    addtime: '2023-05-09T14:30:00.000Z',
    url: 'https://example.com/markets-new-highs'
  },
  {
    id: '3',
    title: 'Champions League Final: Exciting Match Expected',
    category: 'sports',
    thumbnail: 'https://example.com/champions-league.jpg',
    author: 'Mike Johnson',
    addtime: '2023-05-08T16:45:00.000Z',
    url: 'https://example.com/champions-league-final'
  },
  {
    id: '4',
    title: 'New Movie Breaks Box Office Records',
    category: 'entertainment',
    thumbnail: 'https://example.com/movie.jpg',
    author: 'Sarah Williams',
    addtime: '2023-05-07T09:20:00.000Z',
    url: 'https://example.com/movie-box-office'
  },
  {
    id: '5',
    title: 'Study Shows Benefits of Regular Exercise',
    category: 'health',
    thumbnail: 'https://example.com/exercise.jpg',
    author: 'Dr. Emily Davis',
    addtime: '2023-05-06T11:50:00.000Z',
    url: 'https://example.com/exercise-benefits'
  }
];

module.exports = {
  users,
  categories,
  channels,
  tags,
  newsItems
};
import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
  let name = 'Aleksandra';
  let age = 17;
  let fruits = [
  '67',
  'skibidi',
  ];
  res.render('index.njk', {name, age, fruits});
});

router.get('/about', (req, res) => {
  res.render('about.njk');
});

router.get('/contact', (req, res) => {
  res.render('contact.njk');
});

router.get('/form', (req, res) => {
  res.render('form.njk');
});

router.post('/answers', (req, res) => {
  let answers = req.query;
  answers.cool = answers.cool === 'on' ? true : false;
  answers.age = parseInt(answers.age);
  answers.like = parseInt(answers.like);
  res.render('answers.njk' , answers);
});

router.post('/answers', (req, res) => {
  let answers = req.body;
  answers.cool = answers.cool === 'on' ? true : false;
  answers.age = parseInt(answers.age);
  answers.like = parseInt(answers.like);
  res.render('answers.njk' , answers);
});

export default router;
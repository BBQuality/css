// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()


router.get('/', function (req, res) {

  res.render('index', {})
})

router.get('/selector', function (req, res) {

  res.render('selector', {
    layout: 'selector',
  })
})


module.exports = router

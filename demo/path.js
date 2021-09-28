const path = require('path')

// console.log('Название файла: ', path.basename(__filename))
// console.log('Название директории: ', path.dirname(__filename))
// console.log('Расширение файла: ', path.extname(__filename))
// console.log('typeof path.parse(__filename): ', typeof path.parse(__filename))
// console.log('parse: ', path.parse(__filename))
// console.log('parse.name: ', path.parse(__filename).name)

console.log(path.join(__dirname, 'server', 'index.html'))
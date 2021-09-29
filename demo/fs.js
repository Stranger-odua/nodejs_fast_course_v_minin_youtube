// File System
const fs = require('fs')
const path = require('path')

// Создать папку
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }
//
//   console.log('папка создана')
// })


// Создать файл, перезаписывает всю инфу в файле
const filePath = path.join(__dirname, 'test', 'test.txt')

fs.writeFile(filePath, 'Hello nodejs', (err) => {
  if (err) {
    throw err
  }

  console.log('Файл создан')
})


// Создать файл, добавляет инфу в файл
// const filePath = path.join(__dirname, 'test', 'test.txt')
//
// fs.appendFile(filePath,'Hello nodejs', (err)=>{
//   if (err){
//     throw err
//   }
//
//   console.log('Файл создан')
// })


// Чтение файлов
// fs.readFile(filePath, (err, content) => {
//   if (err) {
//     throw err
//   }
//   const data = Buffer.from(content)
//   console.log('Content: ', data.toString())
// })

// fs.readFile(filePath, 'utf-8', (err, content) => {
//   if (err) {
//     throw err
//   }
//   console.log(content)
// })



























































































































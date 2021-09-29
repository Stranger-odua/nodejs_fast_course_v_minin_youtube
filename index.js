//
// const text = require('./data')
// const chalk = require('chalk')
//
// console.log(chalk.blue(text))
//
// console.log(chalk.yellow(__dirname))
// console.log(chalk.yellow(__filename))



const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer((req, res) => {
  // res.writeHead(200, {
  //   'Content-type': 'text/html'
  //   // 'Content-type': 'text/plain'
  // })

  // console.log('--------------------')
  // console.log(req.url)
  //
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }
  //
  //     res.writeHead(200, {
  //       'Content-type': 'text/html'
  //     })
  //     res.end(data)
  //   })
  // } else if (req.url === '/contact') {
  //   fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }
  //
  //     res.writeHead(200, {
  //       'Content-type': 'text/html'
  //     })
  //     res.end(data)
  //   })
  // }
  //
  //
  // // res.end('<h1>Hello NodeJS</h1>')



  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
  const ext = path.extname(filePath)
  let contentType

  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if (!ext) {
    filePath += '.html'
  }

  console.log(filePath)
  fs.readFile(filePath, (err,content) => {
    if (err){
      fs.readFile(path.join(__dirname, 'public', 'error.html'),(err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-type': contentType
      })
      res.end(content)
    }
  })
  // res.end()

})

const PORT = process.env.PORT || 3000

server.listen(3000, () => {
  console.log(`Сервер был запущен на порту ${PORT}`)
})
























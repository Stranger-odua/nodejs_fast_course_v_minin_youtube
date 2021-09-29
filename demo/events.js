const EventEmitter = require('events')

// const emitter = new EventEmitter()
// emitter.on('anything', (data) => {
//   console.log('ON: anything', data)
// })
//
// emitter.emit('anything', {a: 111})
// emitter.emit('anything', {b: 222})
// emitter.emit('anything', {c: 333})
//
// setTimeout(() => {
//   emitter.emit('anything', {d: 444})
// }, 2000)


class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('Subscribe...')
    this.on(eventName, cb)
  }
  dispatch(eventName, data) {
    console.log('Dispatching...')
    this.emit(eventName, data)
  }
}


const dis = new Dispatcher()

dis.subscribe('aa', (data) => {
  console.log('ON: aa', data)
})

dis.dispatch('aa', {aa: 22})
























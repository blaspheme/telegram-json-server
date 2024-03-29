const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Add this before server.use(router)
server.use(jsonServer.rewriter({
  '/tg/*': '/$1',
}))

server.use(router)

server.listen(8080, () => {
  console.log('JSON Server is running')
})
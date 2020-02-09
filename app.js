const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const atob = require('atob')

const dev = process.env.NODE_ENV === 'development'
const app = next({ dev })
const handle = app.getRequestHandler()

global.atob = atob

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    router.get('/article/:id', async ctx => {
        await handle(ctx.req, ctx.res, {
            pathname: '/article',
            query: {
                id: ctx.params.id
            }
        })
    })

    server.use(router.routes())
    server.use(async ctx => {
        await handle(ctx.req, ctx.res)
    })

    server.listen(3000, () => console.log('server is running...'))
})

import { Middleware } from '@nuxt/types'

const Mid:Middleware = (ctx) => {
  console.log(ctx.route)
}

export default Mid

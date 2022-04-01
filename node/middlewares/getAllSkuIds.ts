export async function getAllSkuIds(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { catalogClient },
  } = ctx


  const data = await catalogClient.listAllSkus()

  ctx.status = 200
  ctx.body = data
  ctx.set('Cache-Control', 'no-cache')

  await next()
}

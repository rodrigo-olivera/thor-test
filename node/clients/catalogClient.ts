import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export default class CatalogClient extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: {
        ...(options && options.headers),
        VtexIdclientAutCookie: ctx.authToken,
      },
    })
  }

  public async getSku(skuId: number): Promise<any> {
    return await this.http.get(`/api/catalog/pvt/stockkeepingunit/${skuId}`, {
      metric: 'get-sku',
    })
  }

  public async listAllSkus(): Promise<any> {
    return await this.http.get(
      'api/catalog_system/pvt/sku/stockkeepingunitids',
      {
        params: {
          page: 1,
          pagesize: 1000000,
        },
        metric: 'list-all-skus',
      }
    )
  }
}

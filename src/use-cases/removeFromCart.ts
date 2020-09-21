import IRemoveFromCart from '../entities/interfaces/removeFromCart'
import IWarehouse from '../entities/interfaces/warehouse'
import ICartRepository from '../entities/interfaces/cartRepository'

import RemovedFromCart from '../entities/types/RemovedFromCart'
import Product from '../entities/types/Product'

abstract class RemoveFromCart implements IRemoveFromCart {
  protected cartRepository: ICartRepository
  protected warehouseServerice: IWarehouse
  constructor(cartRepository, warehouseServerice) {
    this.cartRepository = cartRepository
    this.warehouseServerice = warehouseServerice
  }

  async remove(item: Product): Promise<RemovedFromCart> {
    const isItemReturned = await this.warehouseServerice.returnItemToWarehouse(item)
    if (!isItemReturned) return false
    const isItemDeleted = this.cartRepository.remove(item)
    if (!isItemDeleted) return false

    return true
  }
}

export default RemoveFromCart

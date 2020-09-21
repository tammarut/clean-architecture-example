import RemoveFromCart from '../../use-cases/removeFromCart'

class ConcreteRemoveFromCart extends RemoveFromCart {
  async removeProductFromCli(product) {
    if (product) {
      const isRemoved = await this.remove(product)
      console.log(`😇isAdded: ${isRemoved}`)
    } else {
      console.error('⚠️commandLineOptions require product to be passed')
    }
  }
}

export default ConcreteRemoveFromCart

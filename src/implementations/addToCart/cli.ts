import AddToCart from '../../use-cases/addToCart'

class ConcreteAddToCart extends AddToCart {
  async receiveProductFromCli(product) {
    if (product) {
      const isAdded = await this.add(product)
      console.log(`😇isAdded: ${isAdded} (${product})`)
    } else {
      console.error('⚠️commandLineOptions require product to be passed')
    }
  }
}

export default ConcreteAddToCart

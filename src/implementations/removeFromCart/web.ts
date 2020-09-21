import RemoveFromCart from '../../use-cases/removeFromCart'

class ConcreteRemoveFromCart extends RemoveFromCart {
  async removeProductFromWeb(request, response) {
    if (request && request.body && request.body['item']) {
      const isRemoved = await this.remove(request.body['item'])
      response.json(isRemoved)
    } else {
      throw new Error('body is missing required field item!')
    }
  }
}

export default ConcreteRemoveFromCart

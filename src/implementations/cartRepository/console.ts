import ICartRepository from '../../entities/interfaces/cartRepository'
import AddedToCart from '../../entities/types/AddedToCart';
import Product from '../../entities/types/Product';
import RemovedFromCart from '../../entities/types/RemovedFromCart';

class ConcreteCartRepository implements ICartRepository {
    async add(item: Product): Promise<AddedToCart> {
        console.log('➕Adding item to database')
        return true
    }
    async remove(item: Product): Promise<RemovedFromCart> {
        console.log('➖Removing item to warehouse')
        return true
    }

}

export default ConcreteCartRepository
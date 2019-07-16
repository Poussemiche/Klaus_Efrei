import Toy from './class.Toy'
import Packaging from './class.Packaging'

class GiftWrap extends Packaging {
    constructor() {
        super()
        this.isOpen = false
        this.toy = null
    }

    open() {
        this.isOpen = true
    }
    
    insert(Toy) {
        this.toy = Toy
        this.isOpen = false
    }
}

module.exports = GiftWrap;

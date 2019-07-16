import Toy from './class.Toy'

class Packaging {
    constructor() {
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

module.exports = Packaging;

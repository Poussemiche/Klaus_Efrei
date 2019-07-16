import Packaging from './class.Packaging'
import Toy from './class.Toy'
import GiftWrap from './class.GiftWrap'

class Elf {
    constructor(nickname) {
       this.nickname = nickname
    }

    getNikname() {
        return this.nickname
    }
    setNickname(set_nickname) {
        this.nickname = set_nickname
    }
    pack(packaging, toy) {
        if (packaging.toy)
            console.log('Sorry this package is already filled')
        else if (packaging.isOpen || packaging instanceof GiftWrap) {
            packaging.insert(toy)
            console.log(`Yeaaaah! Just packing the toy ~~ ${packaging.toy.getType()} ~~`)
        }
        else
            console.log('Sorry this package is not open')
    }

    unpack(packaging) {
        if (!packaging.toy || packaging.isOpen)
            console.log('Sorry this package is already empty')
        else {
            let current_toy = packaging.toy
            console.log(`Ooooooh! Just unpacking the toy ~~ ${packaging.toy.getType()} ~~`)
            packaging.toy = null
            return current_toy
        }
        return packaging.toy
    }
}

module.exports = Elf;

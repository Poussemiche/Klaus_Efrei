import { DragonBall, DBHeroes } from './class.DragonBall'
import Pony from './class.Pony'
import Toy from './class.Toy'
import Box from './class.Box'
import GiftWrap from './class.GiftWrap'
import Elf from './class.Elf'
import Packaging from './class.Packaging'

//STEP 1
console.log('--- STEP #1 ---')

let findus = new Pony()
let goku = new DragonBall(DBHeroes.SANGOKU)

findus.isMoved()
goku.isMoved()


//STEP 2
console.log('--- STEP #2 ---')

var majdi = new Elf('makiboto')
var box = new Box()
majdi.pack(box, goku)
box.open()
majdi.pack(box, goku)

var paper = new GiftWrap()
majdi.pack(paper, findus)
majdi.pack(paper, findus)

var toy = majdi.unpack(paper)
console.log(toy === findus)
var r = majdi.unpack(paper)
console.log((r == null))

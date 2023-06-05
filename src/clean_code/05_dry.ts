
type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size = '',
    ) { }

    toString() {
        // No DRY
        if (this.name.length <= 0) throw Error('name is empty')
        if (this.price <= 0) throw Error('price is zero or negative')
        if (this.size.length <= 0) throw Error('size is empty')

        return `Nombre : ${this.name} (${this.price}), ${this.size}`
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 10, 'S')
    console.log(bluePants.toString());
})();
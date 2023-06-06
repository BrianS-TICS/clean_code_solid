
type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size = '',
    ) { }

    isProductReady(): boolean {

        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string>this[key]).length <= 0) throw Error(` ${key} is empty`)
                    break;
                case 'number':
                    if ((<number>this[key]) <= 0) throw Error(` ${key} is zero`)
                    break;

                default:
                    throw Error(` ${this[key]} s not valid`)
            }
        }

        return true;
    }

    toString() {
        
        if (!this.isProductReady) return;

        return `Nombre : ${this.name} (${this.price}), ${this.size}`
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 10, 'S')
    console.log(bluePants.toString());
})();
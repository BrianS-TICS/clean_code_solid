(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {

        getProduct(id: number) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product);
        }

    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {


    }

    class CartBloc {

        private itemsInCart: Object[] = [];

        addToCart(productId: number) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId);
        }

    }

    class Mailer {

        private masterEmail: string = 'Briansah@gmacil.com';


        sendEmail(emailList: string[], template: 'to-clientes' | 'to_admins') {
            console.log('Enviando correo a los clientes', template);
        }

    }


    const productBloc = new ProductBloc();
    const cartBloc = new CartBloc();

    // productBloc.loadProduct(10);
    // productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    // productBloc.notifyClients();
    cartBloc.addToCart(10);








})();
//Actividad 1: Creación de un producto
/*
//▼ Iniciar un objeto
const producto1 = {
  nombre: "celular",
  precio: 100000,
  stock: 2,
};
//▼ Agregar propiedades
producto1.id = "id123";
producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";
console.log(producto1);
*/
//------------------------------------------------------------------
/*
//Actividad 2: Creación de un producto
class Product {
  constructor(id, title, price, stock, images, onsale) {
    //▼Atributos
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
  }
}
const prod1 = new Product();
const prod2 = new Product("123", "aaa", 100);
const prod3 = new Product("1234", "bbb", 200, 2, ["imagen1", "imagen2"], true);
console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod2.title);
console.log(prod3.onsale);
*/
//------------------------------------------------------------------
//Actividad 3: Obtención y modificación de propiedades de una instancia
class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;//Atributo privado
  }
  //▼metodos getter y setter del atributo privado
  get getSupplier() {
    return this._supplier;
  }
  set getSupplier(newName) {
    this._supplier = newName;
  }
  sellUnits(units) { //restará la cantidad vendida al stock
		this.stock = this.stock - units; 
	}
}
const prod1 = new Product();
const prod2 = new Product("123", "aaa", 100);
const prod3 = new Product("1234", "bbb", 200, 2, ["imagen1", "imagen2"], true);
const prod4 = new Product("1234", "bbb", 300, 2, ["imagen1", "imagen2"], true, "zzz");
const prod5 = new Product("1234", "bbb", 400, 12, ["imagen1", "imagen2"], true, "xxx");
//prod5.sellUnits(10); //le resta 10 al stock del prod5
prod5.sellUnits(5);//le resta 5 al stock del prod5
//▼Impresión en la consola
console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod4);
console.log(prod5);
console.log(prod2.title);
console.log(prod3.onsale);

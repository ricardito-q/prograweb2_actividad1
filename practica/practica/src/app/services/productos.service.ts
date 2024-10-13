import { Injectable } from "@angular/core";
import { producto } from "../models/producto.models";
@Injectable({ providedIn: 'root' })
export class productosservice {
    constructor() {
        console.log("servicio listo para usar!!!");

    }
    private productos: producto[] = [
        { nombre: "audifonos", img: "https://selectsound.com.mx/cdn/shop/products/audifonos-bluetooth-scape-184723_1080x1080.jpg?v=1690705555 ", precio: 100 },
        { nombre: "tenis", img: "https://th.bing.com/th/id/OIP.c7PbqjF0agoERNS-fKXI7AHaHa?w=191&h=191&c=7&r=0&o=5&pid=1.7", precio: 100 },
        { nombre: "rloj", img: "https://th.bing.com/th/id/OIP.7KACvwkDYdHVb1vAD25ZiAAAAA?w=182&h=182&c=7&r=0&o=5&pid=1.7", precio: 100 },
    ];
//nombre deñl modelo : objeto que retorna
    getproductos(): producto[] { return this.productos; }
//devuelve un producto por id 
    getproducto(id: number) { return this.productos[id]; }
    buscarproductos(termino: string): producto[] {
        let productosarr: producto[] = [];
        termino = termino.toLowerCase();
        for (let i = 0; i < this.productos.length; i++) {
            let producto = this.productos[i];
            let nombre = producto.nombre.toLowerCase();
            if (nombre.indexOf(termino) >= 0) {
                productosarr.push(producto)
            }
        }
        return productosarr;
    }
}
import {Injectable} from '@angular/core';
import { Producto } from '../models/producto.models';
@Injectable ({providedIn: 'root'})
export class ProductosService{
    constructor(){
        console.log("Servicio listo para usar!!!");
    }
    private productos: Producto[]=[
        {nombre: "Tenis", img:"https://th.bing.com/th/id/OIP.c7PbqjF0agoERNS-fKXI7AHaHa?w=191&h=191&c=7&r=0&o=5&pid=1.7 ",precio: 200},
        {nombre: "Audifonos", img:"https://th.bing.com/th/id/OIP.fbYGCNmgbzw1b0cVNKo7lAHaIa?w=186&h=211&c=7&r=0&o=5&pid=1.7 ",precio: 100},
        {nombre: "Reloj", img:"https://th.bing.com/th/id/OIP.7KACvwkDYdHVb1vAD25ZiAAAAA?w=182&h=182&c=7&r=0&o=5&pid=1.7 ",precio: 300},
    ];
    getProductos(): Producto[]
    {return this.productos;}

    getProducto(id:number) 
    {return this.productos[id];}
    
    buscarProductos (termino: string): Producto[]{
        let productosArr: Producto[]= [];
        termino = termino.toLocaleLowerCase();
        for(let i= 0;i < this.productos.length; i++){
            let producto = this.productos[i];
            let nombre = producto.nombre.toLocaleLowerCase();
            if(nombre.indexOf(termino)>=0){
                productosArr.push(producto)
            }
        }
        return productosArr;
    }
}
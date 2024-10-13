import {Injectable} from '@angular/core';
import { Producto } from '../models/producto.models';
@Injectable ({providedIn: 'root'})
export class ProductosService{
    constructor(){
        console.log("Servicio listo para usar!!!");
    }
    private productos: Producto[]=[
        {nombre: "Pc Gamer", img:"https://maxxicomp.com/68-large_default/case-gamemax-mini-abyss-h608-negro-350x193x390mm-vidrio.jpg ",precio: 3500},
        {nombre: "Laptop", img:"https://maxxicomp.com/3367-large_default/laptop-lenovo-v15-g4-amn-ryzen-5-7520u-16gb-ram-512gb-ssd-solido-156-fhd.jpg ",precio: 2550},
        {nombre: "Monitor", img:"https://maxxicomp.com/5279-large_default/monitor-gamer-27-teros-te-2711s-plano-fhd-ips.jpg",precio: 1500},
         
        {nombre: "Mouse", img:"https://maxxicomp.com/5491-large_default/mouse-xtrike-me-gm-520-rgb-usb-gaming-programable.jpg",precio: 150},
        {nombre: "Mouse", img:"https://mipclista.com/6455-large_default/pc-gamer-firex8-rgb-plus-core-i9-13900k-13th.jpg",precio: 150},
        {nombre: "Mouse", img:"https://mipclista.com/3172-large_default/case-gamer-1st-player-zx7.jpg",precio: 150},
        {nombre: "Monitores", img:"https://mipclista.com/img/c/37.jpg",precio: 150},
        {nombre: "Monitores Curvos", img:"https://mipclista.com/img/c/38.jpg",precio: 150},
        {nombre: "Monitores 144Hz", img:"https://mipclista.com/img/c/39.jpg",precio: 150},
        {nombre: "laptop hp", img:"https://mipclista.com/6585-home_default/laptop-hp-250-g9-156-core-i5-12th.jpg",precio: 150},
        {nombre: "laptop hp", img:"https://mipclista.com/6338-home_default/laptop-hp-250-g9-156-core-i7-1255u.jpg",precio: 150},
        {nombre: "laptop victus", img:"https://mipclista.com/5346-home_default/laptop-hp-victus-156-core-i5-13th.jpg",precio: 150},
        {nombre: "laptop acer", img:"https://mipclista.com/5619-large_default/laptop-acer-nitro-5-173-core-i7-12th-gen.jpg",precio: 150},
        {nombre: "laptop lenovo", img:"https://mipclista.com/6187-large_default/laptop-lenovo-ideapad-gaming-3-156-core-i5-12th.jpg",precio: 150},
        {nombre: "laptop hp", img:"https://mipclista.com/4473-large_default/laptop-hp-15ef2522la-156-ryzen-3.jpg",precio: 150},
         
         
        
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
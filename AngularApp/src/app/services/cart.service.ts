import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../model/product";
import {Cart} from "../model/cart";

@Injectable()
export class CartService {

    public cartListSubject = new BehaviorSubject([]);
    public toggleCartSubject = new BehaviorSubject(false);

    toggleCart = () => {
        this.toggleCartSubject.next(!this.toggleCartSubject.getValue());
    };
    addToCart = (cart:Cart) => {
        let current = this.cartListSubject.getValue();
        let dup = current.find(c=>c.product.title === cart.product.title);
        if(dup) dup.quantity += cart.quantity;
        else current.push(cart);
        console.log(cart);
        this.cartListSubject.next(current);

        //ajouter au panier function
    };
    reloadCart = (cartList) => {
        this.cartListSubject.next(cartList);
        //il retourne la liste apres la modification 
        //fonction de modification de la liste product par product

    };
    removeCart = index => {
        let current = this.cartListSubject.getValue();
        current.splice(index,1);
        this.cartListSubject.next(current);
    };
}
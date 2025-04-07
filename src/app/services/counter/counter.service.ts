import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  ciao = signal('hello');

  counter = signal(0);

  doubleCounter = computed(() => this.counter() * 2);



  constructor() {
    effect(() => {
      console.log('E1 il contatore vale: ', this.counter(), ' e il doppio è ', this.doubleCounter());
    })

    /* effect(() => {
      console.log('E2 il contatore vale: ', this.counter(), ' e il doppio è ', this.doubleCounter());
      console.log(this.ciao());
    })
 
    this.ciao.update(str => str + ' world!');
 
    this.counter.set(8);
 
    this.counter.update(numb => numb + 200);
 
    console.log('il contatore vale: ', this.counter()); 
 
    console.log('il contatore adesso vale: ', this.counter()); 
 
    this.counter.update(oldValue => oldValue + 1);
    console.log('il contatore con update adesso vale: ', this.counter()); */
  }

  addOne() {
    this.counter.update(oldValue => oldValue + 1);
  }
  removeOne() {
    this.counter.update(oldValue => oldValue - 1);
  }

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tutorial');
  name = "Sandeep Kumar";
  email = "sagarsandeep365@gmail.com";
  phone = 6393486748;
  age = 21;
  isadmin = true;

  countSig = signal(0);
  increaseFun(){
    this.countSig.update(value => value+1);
  }
  decreFun(){
    this.countSig.set(this.countSig()-1);
  }

  count = 0;
    increase(){
    this.count++;
  }
  decre(){
    this.count--;
  }
}

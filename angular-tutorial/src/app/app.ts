import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  clicked(){
    console.log("Button clicked");
  }

  inputValue(event:any){
    console.log(event);
  }

  onKeyUp(event:any){
    console.log(event);
  }

  onHover(){
    console.log("mouse enter");
  }

  onLeave(){
    console.log("mouse leave");
  }
}

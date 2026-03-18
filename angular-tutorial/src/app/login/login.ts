import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username: string = 'Sandeep';
  isDisabled: boolean = true;
  profileImage: string = 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg';

  isError: boolean = false;

  toggleButton() {
    this.isDisabled = !this.isDisabled;
  }

  toggleError() {
    this.isError = !this.isError;
  }
}
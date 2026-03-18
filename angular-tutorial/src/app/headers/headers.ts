import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './headers.html',
  styleUrl: './headers.css',
})


export class Headers {
  isLoggedIn = true;
  username = "Sandeep Kumar";

  logout() {
    this.isLoggedIn = false;
    this.username = "";
  }
}

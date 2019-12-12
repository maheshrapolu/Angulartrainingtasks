import { Component, OnInit } from '@angular/core';
import { AutoLogoutService } from 'src/app/auto-logout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private autoLogoutService: AutoLogoutService) { }

  ngOnInit() {
    localStorage.setItem('lastAction', Date.now().toString());
  }

}

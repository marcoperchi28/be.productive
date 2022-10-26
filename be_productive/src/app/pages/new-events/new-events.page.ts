import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-events',
  templateUrl: './new-events.page.html',
  styleUrls: ['./new-events.page.scss'],
})
export class NewEventsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['home']);
  }
}

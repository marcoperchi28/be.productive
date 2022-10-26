import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss'],
})
export class EventsCardComponent implements OnInit {

  @Input() hasHead: boolean;
  @Input() hasFooter: boolean;

  @Input() status: string;
  @Input() updatedAt: string;
  @Input() createdAt: string;
  @Input() notes: string;

  constructor() { }

  ngOnInit() {}

}

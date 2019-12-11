import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tash18',
  templateUrl: './tash18.component.html',
  styleUrls: ['./tash18.component.css']
})
export class Tash18Component implements OnInit {
  snapshotParam = "initial value";
  subscribedParam = "initial value";

  constructor( private readonly route: ActivatedRoute,
    private readonly router: Router, ) { }

    ngOnInit() {
      // No Subscription
      this.snapshotParam = this.route.snapshot.paramMap.get("animal");
  
      // Subscribed
      this.route.paramMap.subscribe(params => {
        this.subscribedParam = params.get("animal");
      });
  
    }
  
  
    goto(animal: string): void {
      this.router.navigate(["animals", animal]);
    }
  }
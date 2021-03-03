import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  subScription: Subscription;
  url: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.url = this.router.url;
    this.subScription = this.router.events
      .pipe(filter((event: RouterEvent) => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.url = event.url;
      });
  }

  ngOnDestroy(): void {
    this.subScription.unsubscribe();
  }
}

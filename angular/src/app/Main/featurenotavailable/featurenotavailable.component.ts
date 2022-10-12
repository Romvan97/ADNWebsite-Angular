import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-featurenotavailable',
  templateUrl: './featurenotavailable.component.html',
  styleUrls: ['./featurenotavailable.component.scss']
})
export class FeaturenotavailableComponent implements OnInit {

  constructor(private _navbarService: NavbarService) { }

  ngOnInit(): void {

this._navbarService.show();

  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIndexDirective } from './directives/ng-index.directive';



@NgModule({
  declarations: [
    NgIndexDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }

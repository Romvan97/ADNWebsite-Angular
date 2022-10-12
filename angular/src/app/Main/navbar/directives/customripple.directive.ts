import { animate, animation } from '@angular/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Directive({
  selector: '[rippleOnHover]',
  providers: [MatRipple]
})
export class CustomrippleDirective {

  rippleRef;
  mobile?: boolean;


  constructor(private _elementRef: ElementRef, private _ripple: MatRipple, private breakpoint$: BreakpointObserver) {


    // Observe Breakpoint for ripple on (mobile or pc)
    this.breakpoint$.observe(["(max-width: 665px)"]).subscribe((result: BreakpointState) => {

      if (result.matches) {
        this.mobile = true;
      }
      else {
        this.mobile = false;
      }

    });



  }


  @HostListener('mouseenter')
  onMouseEnter(): void {

    if (this._elementRef && this._elementRef.nativeElement) {
      this._elementRef.nativeElement.style.overflow = 'hidden';
    }


    if (!this.mobile) {

      if (this._ripple) {
        this.rippleRef = this._ripple.launch({
          centered: true, persistent: true, animation: { enterDuration: 500, exitDuration: 100 }, color: 'rgb(0,0,0,0.2)'
        });
      }

    }

    else if (this.mobile) {

      if (this._ripple) {
        this.rippleRef = this._ripple.launch(10,120,{
          centered: false, persistent: true, animation: { enterDuration: 500, exitDuration: 100 }, color: 'rgb(0,0,0,0.2)', radius: 200
        });
      }

    }



  }



  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.rippleRef) {
      this.rippleRef.fadeOut();
    }
  }


}

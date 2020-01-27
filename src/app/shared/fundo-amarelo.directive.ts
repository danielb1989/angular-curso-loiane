import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
  // selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
    ) { 
    // console.log(this._elementRef);
    // console.log(this._elementRef.nativeElement);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
      this._renderer.setElementStyle(
        this._elementRef.nativeElement, 
        'background-color', 
        'yellow'
      );

  }

}

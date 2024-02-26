import { Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 public heroNames: string[]=['Spiderman','Ironman','Hulk','She Hulk','Thor'];
 public deletedHero?: string ='';
 constructor(private elementRef: ElementRef) {
  // Deshabilitar la hidratación para este componente y sus elementos secundarios
  this.elementRef.nativeElement.setAttribute('ngSkipHydration', '');
}
removeLastHero():void{//shift() elimina el primero
  this.deletedHero=this.heroNames.pop();
/*   console.log({deletedHero}); */
}
}

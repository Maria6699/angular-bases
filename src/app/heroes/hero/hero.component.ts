import { Component, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;
  constructor(private elementRef: ElementRef) {
    // Deshabilitar la hidratación para este componente y sus elementos secundarios
    this.elementRef.nativeElement.setAttribute('ngSkipHydration', '');
  }
  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name}-${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 25;

  }
  resetForm():void{
/*     this.name = 'Ironman'; */
    this.age= 45;
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML= '<h1>Desde Angular</h1>'
    });
  }
}


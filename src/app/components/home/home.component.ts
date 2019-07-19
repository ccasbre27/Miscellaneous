import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  
  <app-ng-style></app-ng-style>
  
  <app-css></app-css>
  
  <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequuntur itaque placeat officiis hic eveniet, reprehenderit earum molestiae nihil expedita quam aliquam sint minus. Suscipit minima ipsum error repudiandae possimus.
  </p>
  
  <app-clases></app-clases>
  
  <p [appResaltado]="'orange'">
      Hola Mundo
  </p>
  
  <app-ng-switch></app-ng-switch>
  
  

  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit")
  }

  OnChanges(){
    console.log("OnChanges")
  }

  DoCheck(){
    console.log("DoCheck")
  }

  AfterContentInit(){
    console.log("AfterContentInit")
  }

  AfterContentChecked(){
    console.log("AfterContentChecked")
  }

  AfterViewInit(){
    console.log("AfterViewInit")
  }

  AfterViewChecked(){
    console.log("AfterViewChecked")
  }

  OnDestroy(){
    console.log("OnDestroy")
  }




}

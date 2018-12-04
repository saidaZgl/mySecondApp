import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isRed = false;
  showMovies = true;
  constructor() { }
  isred() {
    this.isRed = true;
    console.log(this.isRed);
  }

  isnotred() {
    this.isRed = false;
    console.log(this.isRed);
  }


  ngOnInit() {
  }

}

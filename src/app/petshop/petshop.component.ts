import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-petshop',
  templateUrl: './petshop.component.html',
  styleUrls: ['./petshop.component.css']
})
export class PetshopComponent implements OnInit {

  name = 'a dog';
  pic = 'https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg';

  changeName(name) {
    this.name = name;
  }

  changePic(pic) {
    this.pic = pic;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

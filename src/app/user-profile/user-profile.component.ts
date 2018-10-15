import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User = {
    nom : 'Wildo',
    prenom : 'Shrek',
    age : 45,
    quote: '',
    citation: 'Les ogres sont... comme les oignons !',
    photoProfil : 'https://www.sondagesremuneres.fr/media/communitypolls/images/2tg39pu7k4ua0y3dxh9kthde2.jpg'
  };

  constructor() { }

  ngOnInit() {
    }
  }

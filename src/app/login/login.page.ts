import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonInput, IonButton, IonToggle, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, FormsModule, IonInput, IonButton, IonToggle, IonText]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

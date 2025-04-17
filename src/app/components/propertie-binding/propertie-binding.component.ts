import { Component } from '@angular/core';

@Component({
  selector: 'app-propertie-binding',
  imports: [],
  templateUrl: './propertie-binding.component.html',
  styleUrl: './propertie-binding.component.css'
})
export class PropertieBindingComponent {
  imgUrl = '../../../assets/galinha.jpg'
  isDisabled = true;
  descImg = "Angular JS";
}

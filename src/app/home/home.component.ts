import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api,service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  product_list: any;

  constructor(private api: ApiService) {
    this.get_data()
  }


  get_data() {
    this.api.getProducts().subscribe((s: any) => {
      this.product_list = s;
      console.log(this.product_list);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { DetalhesService } from 'src/app/services/detalhes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:DetalhesService) { }
    productData:any;
  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }

}

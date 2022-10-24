import { Component, OnInit } from '@angular/core';
import { DetalhesService } from 'src/app/services/detalhes.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:DetalhesService) { }
  productData:any;
  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }

}

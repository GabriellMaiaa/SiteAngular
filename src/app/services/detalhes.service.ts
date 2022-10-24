import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalhesService {

  constructor() { }
    // Modelagem dos products
    productDetails = [
      {
        name:"Iphone 11",
        category: 'Eletrônicos',
        price: 3500,
        serie: 56475,
        prodImg:"https://http2.mlstatic.com/D_NQ_NP_980618-MLA46114620232_052021-O.jpg"
      },
      {
        name:"Smartwatch",
        category: 'Acessórios',
        price: 209.90,
        serie: 56476,
        prodImg:"https://cdn.shopify.com/s/files/1/0652/7454/4381/products/Hot_1800x.jpg?v=1658897184"
      },
      {
        name:"CPU Gamer",
        category: 'Eletrônicos',
        price: 5299.90,
        serie: 56477,
        prodImg:"https://a-static.mlcdn.com.br/800x560/cpu-gamer-barato-amd-a10-4-20ghz-turbo-ssd-games-redseek/redseekcomputer/pcred0059/2acce9b63de10e7582fe4fe66dabc53d.jpg"
      },
      {
        name:"Carregador IOS",
        category: 'Acessórios',
        price: 197.90,
        serie: 56478,
        prodImg:"https://images-shoptime.b2w.io/produtos/3947121219/imagens/carregador-completo-iphone-apple-5-6-7-8-x-12-11-fonte-20w-usb-c-cabo-lightning-conexao-original-nova-type-c-com/3947121219_1_large.jpg"
      },
      {
        name:"Xiaomi Mi 9",
        category: 'Eletrônicos',
        price: 1190.90,
        serie: 56479,
        prodImg:"https://t.ctcdn.com.br/ZOXp6tztGU3bth5_Uc6TOzzbSYs=/fit-in/400x400/filters:format(webp):fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i413651.png"
      },
      {
        name:"Fone Headset Razer",
        category: 'Acessórios',
        price: 497.90,
        serie: 56480,
        prodImg:"https://static-ca.gamestop.ca/images/products/751039/5scrmax1.jpg"
      }
    ]
    
}

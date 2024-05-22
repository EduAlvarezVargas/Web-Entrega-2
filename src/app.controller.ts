import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Bicicleta } from './model/bicicletas.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}



  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bicicletas')
  getBicicletas(): Bicicleta[] {

    const bicicletas: Bicicleta[] = [{
      id: 1,
      img: "media/bicicleta_altitude.webp",
      valor: 799990,
      marca: "ALTITUDE",
      modelo: "R30",
      descripcion: "Bicicleta aro 29, color rojo con detalles gris y negros."
    },{
      id: 2,
      img: "media/bicicleta_treek.webp",
      valor: 490990,
      marca: "TREEK",
      modelo: "2BT",
      descripcion: "Bicicleta aro 26, color blanco con detalles gris."
    },{
      id: 3,
      img: "media/bicicleta_trek_2.webp",
      valor: 349990,
      marca: "TREEK",
      modelo: "3BT",
      descripcion: "Bicicleta aro 26, color azul con detalles gris y negros."
    },{
      id: 4,
      img: "media/bicicleta-hibrida.jpeg",
      valor: 990990,
      marca: "GRAVEL",
      modelo: "KROSS",
      descripcion: "Bicicleta aro 26, color verde musgo con detalles gris."
    },{
      id: 5,
      img: "media/bicicleta_altitude_2.webp",
      valor: 559990,
      marca: "ALTITUDE",
      modelo: "NEKUL",
      descripcion: "Bicicleta aro 29, color gris con detalles anaranjados."
    },{
      id: 6,
      img: "media/bicicleta-ruta.jpg",
      valor: 660990,
      marca: "KROSS",
      modelo: "KS88",
      descripcion: "Bicicleta aro 29, color rojo, con detalles negros."
    },{
      id: 7,
      img: "media/bicicleta.bmx.webp",
      valor: 239990,
      marca: "BMX",
      modelo: "",
      descripcion: "Bicicleta aro 23, color calipso con detalles negros."
    },{
      id: 8,
      img: "media/bicicleta_trek_3.webp",
      valor: 250000,
      marca: "TREK",
      modelo: "DUAL",
      descripcion: "Bicicleta aro 26, color verde oscuro con detalles en negros."
    },{
      id: 9,
      img: "media/bicicleta_trek_4.webp",
      valor: 409990,
      marca: "TREK",
      modelo: "2 GEN",
      descripcion: "Bicicleta aro 26, color rojo con detalles gris y negros."
    },{
      id: 10,
      img: "media/bicicleta_reid.webp",
      valor: 190000,
      marca: "REID",
      modelo: "URBANA",
      descripcion: "Bicicleta aro 24, color gris con detalles calipsos."
    },{
      id: 11,
      img: "media/bicicleta_reid_2.webp",
      valor: 160000,
      marca: "REID",
      modelo: "TAN-SIT",
      descripcion: "Bicicleta aro 29, color blanco con detalles azules."
    },{
      id: 12,
      img: "media/bicicleta_reid_3.webp",
      valor: 139990,
      marca: "REID",
      modelo: "DISC",
      descripcion: "Bicicleta aro 26, color negra con detalles azules."
    },
  
    ]

    return bicicletas;
  }


}

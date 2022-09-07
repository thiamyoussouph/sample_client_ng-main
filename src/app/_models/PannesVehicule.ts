import {Vehicule} from "./vehicule";


export interface PannesVehicule{
  id:number,
  date:Date,
  lieux:string,
  description:string,
  etat:boolean,
  vehicules:Vehicule,

  niveau:string ,

}

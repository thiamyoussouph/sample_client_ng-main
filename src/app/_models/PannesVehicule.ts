import {Vehicule} from "./vehicule";
import {Pannes} from "./pannesModel";

export interface PannesVehicule{
  id:number,
  date:Date,
  lieux:string,
  description:string,
  etat:boolean,
  vehicules:Vehicule,
  pannes:Pannes
  niveau:string ,

}

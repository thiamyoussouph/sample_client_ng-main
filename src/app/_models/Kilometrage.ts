import {Vehicule} from "./vehicule";

export interface Kilometrage {
  id:number;
  kilometrage:number;
  dateEnregistrement:Date;
  vehicule:Vehicule;
}

import {Vehicule} from "./vehicule";


export class Events{
  id: number;
  datedebut: Date;
  lieu: string;
  vehicules: Vehicule;
  libelle: string;
  fin: Date;
  impacte: string;
  urgence: string;
  description: string;
  cause: string;
  job:boolean=false;
}

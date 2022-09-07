import {Vehicule} from "./vehicule";
import {typesPannes} from "./typesPannesModel";

export class EventAccident {
  id: number;
  datedebut: Date;
  lieu: string;
  impacte: string;
  urgence: string;
  vehicules: Vehicule;
  cause: string;
  typePanne:typesPannes
  dateresolution:Date;
  description:string;
}

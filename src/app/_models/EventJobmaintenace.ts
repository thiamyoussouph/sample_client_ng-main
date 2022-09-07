import {Vehicule} from "./vehicule";
import {typesPannes} from "./typesPannesModel";
import {TypesJopeMAIntenaces} from "./TypesJopeMAIntenaces";

export class EventJobmaintenace {
  id: number;
  datedebut: Date;
  lieu: string;
  typesJobDeMaintenance:TypesJopeMAIntenaces
  vehicules: Vehicule;

}

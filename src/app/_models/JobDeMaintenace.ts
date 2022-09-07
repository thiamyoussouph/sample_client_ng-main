import {Vehicule} from "./vehicule";

import {TypesJopeMAIntenaces} from "./TypesJopeMAIntenaces";

export interface JobDeMaintenace {
  id:number;
  dateResolution:Date;
  vehicules:Vehicule;
  lieux:string;
  etat:boolean;
  dateDebut:Date;
  description:string;
  typesJobDeMaintenance:TypesJopeMAIntenaces;



}

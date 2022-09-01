import { ModeleVehicule } from "./modeleVehicule";
import {PannesVehicule} from "./PannesVehicule";
import {Affectation} from "./affectation";
import {Kilometrage} from "./Kilometrage";
import {JobDeMaintenace} from "./JobDeMaintenace";


export interface Vehicule {
  id:number;
  matricule:string;
  nombrePlace:number;
  dateSOrtie:Date;
  dateMisEnMarche:Date;
  dateAchat:Date;
  typesCarburant:string;
  numerochassie:string;
  status:string;
  etats:string;
  modele: ModeleVehicule;
  pannesVehicules :PannesVehicule[];
  affectations:Affectation[];
  kilometrageVehicules:Kilometrage[];
  jobDeMaintenances:JobDeMaintenace[];
}

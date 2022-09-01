import {Vehicule} from "./vehicule";
import {Chauffeur} from "./Chauffeur";



export interface Affectation {
  id:number,
  libellet:string
  dateDebut:Date
  dateFin:Date
  vehicules:Vehicule
  chauffeur:Chauffeur
}

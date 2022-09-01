import {Affectation} from "./affectation";

export interface Chauffeur {
  id: number;
  noms: string;
  prenoms: string;
  dateNaissance: Date;
  dateEmbauche: Date;
  telephone: string;
  adresse: string;
  affectations: Affectation[];
}

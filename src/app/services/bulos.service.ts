import { Injectable } from '@angular/core';
import Bulos from '../data/bulos.json';

@Injectable({
  providedIn: 'root'
})
export class BulosService {

  constructor() {  }

  public getAllBulos() {
      return Bulos;
  }
}

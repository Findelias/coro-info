import { Injectable } from '@angular/core';
import Telefonos from '../data/telefonos.json';

@Injectable({
  providedIn: 'root'
})
export class TelefonosService {

  constructor() { }

  getAllTelefonos() {
    return Telefonos;
  }
}

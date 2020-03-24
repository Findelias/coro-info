import { Component, OnInit } from '@angular/core';
import { TelefonosService } from '../../services/telefonos.service';

@Component({
  selector: 'app-telefonos',
  templateUrl: './telefonos.component.html',
  styleUrls: ['./telefonos.component.scss']
})
export class TelefonosComponent implements OnInit {

  public showList: boolean;
  public telefonos: any;
  constructor(
    private tlfService: TelefonosService
  ) { }

  ngOnInit(): void {
    this.showList = false;
    this.getAllTlf();
  }

  getAllTlf() {
    this.telefonos = this.tlfService.getAllTelefonos();
    this.showList = true;
  }

}

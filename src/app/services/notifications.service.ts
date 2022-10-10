import { Injectable } from '@angular/core';
import { NgxToastService } from 'ngx-toast-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private ngxToastService: NgxToastService) { }

  addSuccess(mensaje: any):void{
    this.ngxToastService.onSuccess('Exito',mensaje)
  }

  addInfo(mensaje: any):void{
    this.ngxToastService.onInfo('Información',mensaje)
  }

  addWarning(mensaje: any):void{
    this.ngxToastService.onWarning('Advertencia',mensaje)
  }

  addDanger(mensaje: any):void{
    this.ngxToastService.onDanger('Error',mensaje)
  }
}

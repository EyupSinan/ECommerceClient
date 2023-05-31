import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMeesageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor(private toastrService:CustomToastrService) {
    toastrService.message("Hello", "Sinan", {messageType:ToastrMeesageType.Info,position:ToastrPosition.TopCenter} );
   
  }
  
 

}




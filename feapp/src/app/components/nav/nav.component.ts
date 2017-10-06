import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    gamemode:string;
    modes:string[];
    modes_text:string[];
      constructor() { }

      ngOnInit() {
          console.log("running ngOnInit....")
            this.modes=['picMode','nameMode','teamMode'];
            this.modes_text=['Picture Mode', 'Name Mode', 'Team Mode'];

      }//ngOnInit

      onClick(e){
         //alert(e.MouseEvent);
         this.gamemode=e.fromElement.textContent;
                  console.log(e.fromElement.textContent);
                  
              }
}//NavComponent

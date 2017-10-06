import { Component } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
       myname:string;
        people : any[];
        person = {
            firstName: '',
            lastName: '',
            _id: ''
        }
        constructor(public dataService:DataService){
                this.dataService.getPeople().subscribe(people => {
                    //console.log(users);
                    this.person = people;
                    this.myname='Michelle Louis';
                });
        }
        // onSubmit(){
        //         this.dataService.addPerson(this.person).subscribe(person =>{
        //             console.log(person);
        //             this.people.unshift(person);
        //         });
        // }
}

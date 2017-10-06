import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-team-mode',
  templateUrl: './team-mode.component.html',
  styleUrls: ['./team-mode.component.css']
})
export class TeamModeComponent implements OnInit {
        myname:string;
        matchstatus:string='';
        data : any[] = [];
        people : any[];

        person : Person = {
            firstName: '',
            lastName: '',
            jobTitle:'',
            was_matched: '',
            id: '',
            headshot: {   id:'',    url:''    }
        };


        result:any='';
        res_id:string=''; chosen_id:string='';

        nameid:string;  //name ID of the name displayed
        rand_index : number=0;
        
          constructor(public dataService:DataService) {
                this.dataService.getPeopleTM().subscribe(peoples =>{
                        this.rand_index = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
                        this.people=peoples;
                        this.nameid=this.people[this.rand_index].id;
                        this.myname=this.people[this.rand_index].firstName+ " " +this.people[this.rand_index].lastName;
                });
            }

          ngOnInit() {
                this.matchstatus='';
             }

             onSubmit({ value, valid } : {value: Person, valid: boolean}){
                    // console.log("in Onsubmit...sending to chkMatch this.person"+this.person );
                    // console.log(value, valid);
                     //console.log('value.................'+value.headshot.id);
                    this.person.id=value.id;
                    this.person.headshot.id=value.headshot.id;    this.chosen_id=value.headshot.id;
                    this.person.was_matched=value.was_matched;

                    this.dataService.chkMatchTM(this.person).subscribe(result =>{
//console.log('person...'+person);

                    this.result=JSON.stringify(result);
                    this.matchstatus=result.was_matched;
                    this.res_id=result.headshot.id;
                        console.log("Value Received: "+ this.result);



                    }, (err)=>{
                        //this function executes when there is an error
                        console.log("Error: "+err);
                    }, ()=>{
                        console.log("COMPLETED");
                    });

             }

}

interface Person{
    firstName: '',
    lastName: '',
    jobTitle:'',
    was_matched: '',
    id: '',
    headshot: {   id:'',    url:''    }
}

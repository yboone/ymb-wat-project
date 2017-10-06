import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-name-mode',
  templateUrl: './name-mode.component.html',
  styleUrls: ['./name-mode.component.css']
})
export class NameModeComponent implements OnInit {
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

        // result = {
        //     firstName: '',
        //     lastName: '',
        //     id: '',
        //     headshot: {   id:'',    url:''    }
        // };
        result:any='';
        res_id:string=''; chosen_id:string='';
        //res_match:boolean=false;
        headshot_id:string;  //headshot ID of the picture displayed
        headshot_url:string;
        nameid:string;
        rand_index : number=0;
        //  this.generate = function(){ this.num=getRandomInt(1, 100);

          constructor(public dataService:DataService) {
                this.dataService.getPeopleNM().subscribe(peoples =>{
                        this.rand_index = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
                        this.people=peoples;
                        //this.person=this.people[3];
                        this.headshot_id=this.people[this.rand_index].headshot.id;
                        this.headshot_url=this.people[this.rand_index].headshot.url;
                        this.nameid=this.people[this.rand_index].id;
                        this.myname=this.people[this.rand_index].firstName+ " " +this.people[this.rand_index].lastName;
                });
            }

          ngOnInit() {
                this.matchstatus='';
             }

             onSubmit({ value, valid } : {value: Person, valid: boolean}){
                                // console.log("in Onsubmit...sending to chkMatch this.person"+this.person );
                                //  console.log(value, valid);
                                // console.log('value nameid.................'+value.id);
                                this.person.id=value.id;
                                this.person.headshot.id=value.headshot.id;    this.chosen_id=value.id;
                                this.person.was_matched=value.was_matched;

                                this.dataService.chkMatchNM(this.person).subscribe(result =>{

                                this.result=JSON.stringify(result);
                                this.matchstatus=result.was_matched;
                                this.res_id=result.headshot.id;
                                // console.log("Value Received: "+ this.result);

                    }, (err)=>{
                                //this function executes when there is an error
                                console.log("Error: "+err);
                    }, ()=>{
                                console.log("COMPLETED");
                    });

             }

            //  getRandomNumber(){
                //    getRandomInt(min,max){
                //        return Math.floor(Math.random() * (max - min + 1)) + min;
                //    }
            //      this.generate = function(){ this.number=getRandomInt(1, 100);
            //      }
            //      this.generate();
            //  }

}

interface Person{
    firstName: '',
    lastName: '',
    jobTitle:'',
    was_matched: '',
    id: '',
    headshot: {   id:'',    url:''    }
}

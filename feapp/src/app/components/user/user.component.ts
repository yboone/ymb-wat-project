import { Component, OnInit } from '@angular/core';

@Component({
      selector: 'app-user',
      templateUrl: './user.component.html',
      styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
name : string;
age : number;
birthday = new Date(1969, 8, 30);
email : string;
address : Address;
hobbies: string[ ]; //array
myTuple: [string, number];
mybool: boolean;
itisnull: null;
noreturntype: void;
notdefined: undefined;
showname: boolean;
isSpecial: boolean;
canSave: boolean;
currentStyles:object={};
 constructor() {
        console.log('constructor ran...');
        this.setCurrentStyles();
    }

        ngOnInit() {
                console.log('ngOnInit ran...');
                this.name = 'Yvette Boone';
                this.age= 48;

                this.email = 'yvette_boone@yahoo.com';
                this.address = { //object
                        street: '5 reef court',
                        city: 'portsmouth',
                        state: 'va'
                }
                this.showname=true;
                this.isSpecial = false;
                this.canSave = true;
                this.mybool=false;
                this.noreturntype = undefined;
                this.notdefined = undefined;
                this.itisnull = null;
                this.myTuple = ['Top Priority', 1];
                this.hobbies  = ['write code', 'watercolor', 'color', 'MixedFit and yoga'];
         }//ngOnInit

         changeValue(){
             this.mybool=!this.mybool;
         }
        setCurrentStyles(){
                this.currentStyles = {
                    'font-style' : this.canSave ? 'italic' : 'normal',
                    'font-size' : this.isSpecial ? '36px' : '10px'
                }
        }
        //events
        onClick(e){
                    //console.log('Hello');
                    console.log(e.type);
                    this.name='Michelle';

                    this.hobbies.push('New Hobby');
                }
        addHobby(hobby){
            console.log(hobby);
            this.hobbies.unshift(hobby);
                }

        deleteHobby(hobby){
            console.log('delete '+hobby);
            for(let i = 0; i < this.hobbies.length; i++){
                    if(this.hobbies[i] == hobby){
                        this.hobbies.splice(i, 1);
                    }
            }
        }
}//@component

//imagine this was more complex, Creating seperation would make it reusable,  easier to read, allow you to
//change easily.  You could have Customer_addr:Address, Employee_addr: Address, Building_addr: Address
//You could also put the interface into a seperate file and export Address.ts and import
//Address.ts into this file.
    interface Address{
        street : string,
        city : string,
        state : string
    }

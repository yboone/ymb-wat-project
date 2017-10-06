import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable ()
        export class DataService{

                people : object[];
                data : Observable<Array<any>>;

                constructor(public http:Http){

                }

                //get json object of people
                getPeople(){
                        return this.http.get('http://localhost:3034/api/picMode/newgame').map(res => res.json());
                }
                chkMatch(person){
                    //console.log('this is what is being sent to chkMatch' + person[0])
                    return this.http.post('http://localhost:3034/api/picMode/match', person).map(res => res.json());
                }
                //get json object of people
                getPeopleTM(){
                        return this.http.get('http://localhost:3034/api/teamMode/newgame').map(res => res.json());
                }
                chkMatchTM(person){
                    //console.log('this is what is being sent to chkMatch' + person[0])
                    return this.http.post('http://localhost:3034/api/teamMode/match', person).map(res => res.json());
                }
                //get json object of people
                getPeopleNM(){
                        return this.http.get('http://localhost:3034/api/nameMode/newgame').map(res => res.json());
                }
                chkMatchNM(person){
                    //console.log('this is what is being sent to chkMatch' + person[0])
                    return this.http.post('http://localhost:3034/api/nameMode/match', person).map(res => res.json());
                }

                getData(){
                        this.data = new Observable(observer => {
                                setTimeout(() => {
                                    observer.next(1);
                                }, 1000);

                                setTimeout(() => {
                                    observer.next(2);
                                }, 2000);

                                setTimeout(() => {
                                    observer.next('Yo');
                                }, 3000);

                                setTimeout(() => {
                                    observer.next(4);
                                }, 4000);

                                setTimeout(() => {
                                    observer.complete();
                                }, 5000);
                        });
                        return this.data;
                }
    }

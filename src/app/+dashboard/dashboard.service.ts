import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { IDashboardService } from './dashboard.service.interface';
import { AngularFire } from 'AngularFire2';

@Injectable()
export class DashboardService implements IDashboardService { 
        constructor(private af:AngularFire) {            
        }

        getNews(userid: string) : Observable<String> {
           let observer = this.af.database.list(`/news/${userid}`)
            .map(res => res.json())
            .do(res => {
                 if(res.length < 1){
                    this.af.database.list('/news/All').subscribe(x => {
                        return x;
                    });    
                 }
                 else{
                        return res;
                 }                   
            });
            return observer;
        }

        addUserNews(url:String,userId:String){

        }


}
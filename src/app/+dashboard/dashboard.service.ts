import { Injectable } from '@angular/core';
import { IDashboardService } from './dashboard.service.interface';

@Injectable()
export class DashboardService implements IDashboardService {
    
        getNews(userid: string) {
            throw new Error('Method not implemented.');
        }


}
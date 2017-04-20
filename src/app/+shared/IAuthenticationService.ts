import { Observable } from 'rxjs';

export interface IAuthenticationService {
    authGoogle();
    authFacebook();
    signOut();
    IsAuthenticated : Observable<Boolean>;
    Username: String;
    ID: String;
    Mail: String;
    Avatar: String
}
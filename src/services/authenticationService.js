import { auth0ClientId, auth0DelegationEndpoint, auth0Domain } from '../consts';
import axios from 'axios';
import moment from 'moment';

let options = {
    auth: {
        redirect: false
    },
    language: 'de',
    primaryColor: '#31324F',
    languageDictionary: {
        title: "Chaos Messenger Login"
    },
}

let lock = new Auth0Lock(
    auth0ClientId,
    auth0Domain,
    options);

export default class AuthenticationService {
    login() {
        return new Promise((resolve, reject) => {
            lock.on("authenticated", (authResult) => {
                let expireDate = moment().add(authResult.expiresIn, 'seconds');
                let tokens = {
                    accessToken: authResult.accessToken,
                    idToken: authResult.idToken,
                    expires: expireDate
                }
                localStorage.setItem("tokens", JSON.stringify(tokens));
                lock.getUserInfo(authResult.accessToken, (error, profile) => {
                    if (error) {
                        // Handle error
                        return reject(error);
                    }
                    this.getFirebaseToken(authResult.idToken).then(token => {
                        profile.idToken = authResult.idToken;
                        profile.firebase = token;
                        localStorage.setItem("profile", JSON.stringify(profile));
                        lock.hide();
                        return resolve(profile);
                    }).catch(err => {
                        return reject(error);
                    });

                });
            });
            lock.show();
        });
    }

    getFirebaseToken(auth0IdToken) {
        let params = {
            params: {
                client_id: auth0ClientId,
                grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                id_token: auth0IdToken,
                scope: 'open_id',
                api_type: 'firebase'
            }
        };

        let request = axios.get(auth0DelegationEndpoint, params);
        let promise = new Promise((resolve, reject) => {
            request.then((result) => {
                let curTime = moment();
                let expireTime = curTime.add(result.data.expires_in, 'seconds');
                let tokenInfo = {
                    token: result.data.id_token,
                    expires: expireTime.toDate()
                }
                localStorage.setItem('firebaseToken', JSON.stringify(tokenInfo));
                return resolve(tokenInfo);
            }).catch((error) => {
                console.log('FirebaseToken GET Rejected: ', error);
                return reject(error);
            });
        });
        return promise;
    }

    logout() {
        localStorage.clear();
    }
}
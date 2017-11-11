let options = {
    auth: {
        redirect: false
    },
    language:'de',
    primaryColor:'#31324F',
    languageDictionary: {
        title: "Chaos Messenger Login"
      },
}

let lock = new Auth0Lock(
    "ksXjhEEZmYjoK3QtYyMpy6Ngnrpb2v0p",
    "chaosmett.eu.auth0.com",
    options);

export default class AuthenticationService {
    login() {
        return new Promise((resolve, reject) => {
            lock.show();
            lock.on("authenticated", (authResult) => {
                localStorage.setItem("accessToken", authResult.accessToken);
                lock.getUserInfo(authResult.accessToken, (error, profile) => {
                    if (error) {
                        // Handle error
                        return reject(error);
                    }

                    localStorage.setItem("profile", JSON.stringify(profile));
                    lock.hide();
                    return resolve(profile);
                });
            });
        });
    }

    logout() {
        localStorage.clear();
    }
}
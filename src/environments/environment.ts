// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyC3aCRrN30TB7km3eF8MTQZy-jamq8LHiI",
    authDomain: "angular-firebase-curd.firebaseapp.com",
    databaseURL: "https://angular-firebase-curd.firebaseio.com",
    projectId: "angular-firebase-curd",
    storageBucket: "angular-firebase-curd.appspot.com",
    messagingSenderId: "800370107028"
  }

};

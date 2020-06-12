// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB9jKQwCqUx8KFH3N7ktJm89MmVjeif_FQ",
  authDomain: "justschedule-fbd96.firebaseapp.com",
  databaseURL: "https://justschedule-fbd96.firebaseio.com",
  projectId: "justschedule-fbd96",
  storageBucket: "justschedule-fbd96.appspot.com",
  messagingSenderId: "501811336308",
  appId: "1:501811336308:web:18ea0c02d589878c26ed21",
  measurementId: "G-0E3T8PBQ33"

  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

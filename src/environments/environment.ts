// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const host = '172.27.10.230';
export const environment = {
  production: false,
  sendingUrl: 'http://' + host + ':8003',
  receivingUrl: 'http://' + host + ':8004',
  qrUrl: 'http://172.27.21.31:8889',
  redirectUrl: 'http://172.27.21.31:3000/',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

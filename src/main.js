import RuntimeLoader from 'service-framework/dist/RuntimeLoader';
import InstallerFactory from '../resources/factories/InstallerFactory';

let installerFactory = new InstallerFactory();

window.KJUR = {};

let hyperty = 'https://localhost/.well-known/hyperties/Hello';
let runtime = 'https://localhost/.well-known/runtimes/RuntimeUA';

let runtimeLoader = new RuntimeLoader(installerFactory, runtime);

runtimeLoader.install().then(function(result) {
  console.log(result);
}).catch(function(reason) {
  console.error(reason);
});

// runtimeCatalogue.getHypertyDescriptor(hyperty).then(function(descriptor) {
//   console.log(descriptor);
// }).catch(function(reason) {
//   console.error('Error: ', reason);
// });

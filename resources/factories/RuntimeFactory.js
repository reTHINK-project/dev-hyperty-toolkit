import SandboxBrowser from '../sandboxes/SandboxBrowser';
import AppSandboxBrowser from '../sandboxes/AppSandboxBrowser';
import Request from '../browser/Request';

class RuntimeFactory {

  createSandbox() {
    return new SandboxBrowser();
  }

  createAppSandbox() {
    return new AppSandboxBrowser();
  }

  createHttpRequest() {
    let request = new Request();
    return request;
  }

  removeSandbox() {

  }

}

export default RuntimeFactory;

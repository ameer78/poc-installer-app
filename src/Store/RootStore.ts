import InstallStore from "./InstallStore"

export default class RootStore {
    installStore: InstallStore
  
    constructor() {
      this.installStore = new InstallStore(this);
    }
  }
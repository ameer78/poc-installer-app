import { action, configure, makeObservable, observable } from "mobx";
import axios from "axios";
import Pusher from "pusher-js";
import RootStore from "./RootStore";

interface UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  OS: string;
  company: string;
}

//TODO take care of types

configure({ enforceActions: "always" });

const pusher = new Pusher("a6bf9c4971a0d7431a7b", {
  cluster: "ap2",
});

export default class InstallStore {
  root: RootStore

  @observable public userInfo: any;
  @observable public installed: boolean;
  @observable public installationStatus: any;
  @observable public InstallationErr: boolean;
  @observable public inProgress: boolean;
  @observable public loading: boolean;
  @observable public progress: number;

  private installApiUrl = "http://localhost:8080/install";
  constructor(root: RootStore) {
    this.root = root;
    this.userInfo = {
      email: "",
      firstName: "",
      lastName: "",
      OS: "",
      company: "",
    };
    this.installed = false;
    this.InstallationErr = false;
    this.installationStatus = undefined;
    this.inProgress = false;
    this.loading = false;
    this.progress = 0;

    makeObservable(this);
  }

  @action setInstallInfo(info: any) {
    this.userInfo = info;
  }

  @action setInProgress(value: boolean) {
    this.inProgress = true;
  }

  @action async sendInstallInfo() {
    try {
      // TODO Pusher logic should be in suitable place
      
      const channel = pusher.subscribe("install");


      channel.bind("progress", (data: any) => {
        this.progress = data.percent;
        if (data.percent === 100) {
          this.loading = false;
          this.progress = 0;
        }
      });
      /////////////////////////////////////

      

      const response = await axios.post(this.installApiUrl, {
        ...this.userInfo,
      });

      this.inProgress = false;
      this.installationStatus = response.data;
    } catch (err) {
      this.InstallationErr = true;
      throw(err);
    }
  }
}

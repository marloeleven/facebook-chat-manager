import Base from './base';

export interface IState {
  loggedIn: boolean;
  accessToken: string;
  userId: string;
}

export interface ILogin {
  state: IState;
  setData: (data: IState) => void;
}

class Login extends Base implements ILogin {
  state: IState = {
    loggedIn: false,
    accessToken: '',
    userId: '',
  };

  setData(data: IState) {
    this.save((draft: IState) => {
      Object.assign(draft, data);
    });
  }
}

export default new Login();

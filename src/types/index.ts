declare global {
  interface Window {
    fbAsyncInit: any;
    FB: {
      init: Function;
    };
  }
}

export interface IPage {
  id: string;
  name: string;
  access_token: string;
}

export interface IVideo {
  id: string;
  title: string;
  status: string;
}
export interface IMessage {
  id: string;
  from: {
    id: string;
    name: string;
  };
  message: string;
  created_time: string;
}

import { Container } from 'unstated';
import produce from 'immer';

interface IBase {
  save: (callback: Function) => Promise<any>;
}

export default class Base extends Container<{}> implements IBase {
  save(callback: Function) {
    return this.setState(
      produce((draft) => {
        callback(draft);
      })
    );
  }
}

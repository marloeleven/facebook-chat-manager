import Base from './base';
import { ILangEnum } from 'types/lang';
import en from 'lang/en.json';

interface LangObject {
  [key: string]: string;
}

interface IState {
  lang: ILangEnum;
  data: LangObject;
}

interface ILang {
  state: IState;
  setLang: (lang: ILangEnum) => void;
  getText: (key: string, defaultValue: string) => string;
}

class Lang extends Base implements ILang {
  state: IState = {
    lang: ILangEnum.en,
    data: en,
  };

  setLang(lang: ILangEnum) {
    this.save((draft: IState) => (draft.lang = lang));
  }

  getText(key: string, defaultValue: string = '') {
    return this.state.data.hasOwnProperty(key)
      ? this.state.data[key]
      : defaultValue;
  }
}

export { Lang };
export default new Lang();

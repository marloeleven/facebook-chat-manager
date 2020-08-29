import CONFIG from 'const/config';

interface IURLParams {
  [key: string]: any;
}

interface IApiResult {
  data: any[];
}

const generateURL = (paramsObj: IURLParams) => {
  const baseURL = [CONFIG.fb.BASE_URL, CONFIG.fb.version].join('/');

  const params = new URLSearchParams(paramsObj).toString();

  return { baseURL, params };
};

export const getLiveVideos = (
  id: string | number,
  access_token: string
): Promise<IApiResult> => {
  const { baseURL, params } = generateURL({ access_token });

  return new Promise((resolve, reject) => {
    const result = fetch(`${baseURL}/${id}/live_videos?status=LIVE&${params}`)
      .then((r) => r.json())
      .catch(reject);

    resolve(result);
  });
};

export const getPages = (access_token: string): Promise<IApiResult> => {
  const { baseURL, params } = generateURL({ access_token });

  return new Promise((resolve, reject) => {
    const result = fetch(`${baseURL}/me/accounts?fields=id,name&${params}`)
      .then((r) => r.json())
      .catch(reject);

    resolve(result);
  });
};

export default {
  getPages,
  getLiveVideos,
};

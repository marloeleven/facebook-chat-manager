import CONFIG from 'const/config';
import lscache from 'lscache';
import isEmpty from 'lodash/isEmpty';
import { IPage, IVideo } from 'types';

interface IURLParams {
  [key: string]: any;
}

interface ICacheList {
  id: string;
  list: [];
}

const generateURL = (paramsObj: IURLParams) => {
  const baseURL = [CONFIG.fb.BASE_URL, CONFIG.fb.version].join('/');

  const params = new URLSearchParams(paramsObj).toString();

  return { baseURL, params };
};

const VIDEOS = 'videos';
export const getLiveVideos = (
  pageId: string,
  access_token: string
): Promise<IVideo[]> => {
  const { baseURL, params } = generateURL({ access_token });

  return new Promise(async (resolve, reject) => {
    const cache: ICacheList = lscache.get(VIDEOS);

    if (!isEmpty(cache) && cache && cache.id === pageId) {
      resolve(cache.list);
      return;
    }

    const { data } = await fetch(
      `${baseURL}/${pageId}/live_videos?status=id,name,status&${params}&filtering=[{ field: 'status', operator: 'EQUAL', value: 'LIVE' }]&limit=10`
    )
      .then((r) => r.json())
      .catch(reject);

    // lscache.set(VIDEOS, {
    //   id: pageId,
    //   list: data,
    // });

    const videos = (data as IVideo[]).filter(
      (video) => video.status === 'LIVE'
    );

    resolve(videos);
  });
};

const PAGES = 'pages';
export const getPages = (
  userId: string,
  access_token: string
): Promise<IPage[]> => {
  const { baseURL, params } = generateURL({ access_token });

  return new Promise(async (resolve, reject) => {
    const cache: ICacheList = lscache.get(PAGES);

    if (!isEmpty(cache) && cache && cache.id === userId) {
      resolve(cache.list);
      return;
    }

    const { data } = await fetch(
      `${baseURL}/me/accounts?fields=id,name,access_token&${params}`
    )
      .then((r) => r.json())
      .catch(reject);

    lscache.set(PAGES, data);

    resolve(data);
  });
};

export default {
  getPages,
  getLiveVideos,
};

import { Subject, BehaviorSubject, defer, empty, of } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  switchMap,
  retryWhen,
  delay,
  catchError,
} from 'rxjs/operators';

import { IMessage } from 'types';

const fieldsArray = [
  'id',
  'attachment',
  'created_time',
  'from',
  'message',
  'message_tags',
];

const commentRate = 'one_hundred_per_second';

const generateUrl = (liveVideoId: string, accessToken: string) => {
  const fields = fieldsArray.join(',');

  const urlMain = [
    'https://streaming-graph.facebook.com',
    liveVideoId,
    'live_comments',
  ].join('/');

  const params = [
    `access_token=${accessToken}`,
    `comment_rate=${commentRate}`,
    `fields=${fields}`,
  ].join('&');

  return `${urlMain}?${params}`;
};

export interface IConnect {
  liveVideoId: string;
  accessToken: string;
}

const messages$ = new Subject();
export const connect$ = new Subject();
export const connected$ = new BehaviorSubject(false);

export const onMessages$ = messages$.pipe(
  map((message) => message as IMessage),
  distinctUntilChanged((prev, next) => prev.id === next.id)
);

connect$
  .pipe(
    map((value) => value as IConnect),
    switchMap(({ liveVideoId, accessToken }) =>
      defer(
        () =>
          new Promise((resolve, reject) => {
            const url = generateUrl(liveVideoId, accessToken);

            const es = new EventSource(url);

            es.onopen = () => {
              resolve(es);
              connected$.next(true);
            };

            es.onerror = () => {
              reject();
            };
          })
      ).pipe(
        retryWhen((err) => err.pipe(delay(3000))),
        map((es) => es as EventSource)
      )
    )
  )
  .subscribe((es) => {
    es.addEventListener('message', ({ data }) => {
      const message = JSON.parse(data);

      if (message.from && message.from.id && message.from.name) {
        messages$.next(message);
      }
    });
  });

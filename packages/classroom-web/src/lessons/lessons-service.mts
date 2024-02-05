import { IZLesson } from '@zthun/classroom-school';
import { ZHttpService } from '@zthun/webigail-http';
import { IZRestfulService, ZRestfulService } from '@zthun/webigail-rest';
import { ZUrlBuilder } from '@zthun/webigail-url';
import { createContext, useContext } from 'react';

export function createLessonsService(): IZRestfulService<IZLesson> {
  const endpoint = new ZUrlBuilder().api(location).append('lessons').build();
  const http = new ZHttpService();
  return new ZRestfulService<IZLesson>(http, endpoint);
}

export const ZLessonsServiceContext = createContext(createLessonsService());

export function useLessonsService() {
  return useContext(ZLessonsServiceContext);
}

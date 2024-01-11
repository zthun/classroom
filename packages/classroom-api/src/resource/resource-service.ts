import { IZDataRequest, IZPage } from '@zthun/helpful-query';

export interface IZResourceListService<TProjection> {
  list(request: IZDataRequest): Promise<IZPage<TProjection>>;
}

export interface IZResourceGetService<TProjection> {
  get(name: string): Promise<TProjection>;
}

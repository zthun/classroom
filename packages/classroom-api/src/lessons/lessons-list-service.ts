import { Inject, Injectable } from '@nestjs/common';
import { IZLesson } from '@zthun/classroom-school';
import { IZDatabaseDocument } from '@zthun/dalmart-db';
import { IZDataRequest, IZPage, ZPageBuilder } from '@zthun/helpful-query';
import { ZClassroomCollection, ZDatabaseToken } from '../database/database.mjs';
import { IZResourceListService } from '../resource/resource-service';

@Injectable()
export class ZLessonsListService implements IZResourceListService<IZLesson> {
  public constructor(@Inject(ZDatabaseToken) private readonly _dal: IZDatabaseDocument) {}

  public async list(request: IZDataRequest): Promise<IZPage<IZLesson>> {
    const count = await this._dal.count(ZClassroomCollection.Lessons, request.filter);
    const data = await this._dal.read<IZLesson>(ZClassroomCollection.Lessons, request);
    return new ZPageBuilder<IZLesson>().data(data).count(count).build();
  }
}

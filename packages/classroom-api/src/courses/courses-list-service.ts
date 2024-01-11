import { Inject, Injectable } from '@nestjs/common';
import { IZCourse } from '@zthun/classroom-school';
import { IZDatabaseDocument } from '@zthun/dalmart-db';
import { IZDataRequest, IZPage, ZPageBuilder } from '@zthun/helpful-query';
import { ZClassroomCollection, ZDatabaseToken } from '../database/database.mjs';
import { IZResourceListService } from '../resource/resource-service';

@Injectable()
export class ZCoursesListService implements IZResourceListService<IZCourse> {
  public constructor(@Inject(ZDatabaseToken) private readonly _dal: IZDatabaseDocument) {}

  public async list(request?: IZDataRequest): Promise<IZPage<IZCourse>> {
    const count = await this._dal.count(ZClassroomCollection.Courses, request?.filter);
    const data = await this._dal.read<IZCourse>(ZClassroomCollection.Courses, request);
    return new ZPageBuilder<IZCourse>().data(data).count(count).build();
  }
}

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IZCourse } from '@zthun/classroom-school';
import { IZDatabaseDocument } from '@zthun/dalmart-db';
import { ZDataRequestBuilder, ZFilterBinaryBuilder } from '@zthun/helpful-query';
import { ZClassroomCollection, ZDatabaseToken } from '../database/database.mjs';
import { IZResourceGetService } from '../resource/resource-service';

@Injectable()
export class ZCoursesGetService implements IZResourceGetService<IZCourse> {
  public constructor(@Inject(ZDatabaseToken) private readonly _dal: IZDatabaseDocument) {}

  public async get(identification: string): Promise<IZCourse> {
    const idFilter = new ZFilterBinaryBuilder().subject('_id').equal().value(identification).build();
    const request = new ZDataRequestBuilder().filter(idFilter).build();

    const [course] = await this._dal.read<IZCourse>(ZClassroomCollection.Courses, request);

    if (course == null) {
      throw new NotFoundException(`Course, ${identification}, was not found.`);
    }

    return course;
  }
}

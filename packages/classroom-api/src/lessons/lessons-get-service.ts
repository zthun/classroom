import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IZLesson } from '@zthun/classroom-school';
import { IZDatabaseDocument } from '@zthun/dalmart-db';
import { ZDataRequestBuilder, ZFilterBinaryBuilder } from '@zthun/helpful-query';
import { ZClassroomCollection, ZDatabaseToken } from '../database/database.mjs';
import { IZResourceGetService } from '../resource/resource-service';

@Injectable()
export class ZLessonsGetService implements IZResourceGetService<IZLesson> {
  public constructor(@Inject(ZDatabaseToken) private _dal: IZDatabaseDocument) {}

  public async get(identification: string): Promise<IZLesson> {
    const idFilter = new ZFilterBinaryBuilder().subject('_id').equal().value(identification).build();
    const request = new ZDataRequestBuilder().filter(idFilter).build();

    const [lesson] = await this._dal.read<IZLesson>(ZClassroomCollection.Lessons, request);

    if (lesson == null) {
      throw new NotFoundException(`Lesson, ${identification}, was not found.`);
    }

    return lesson;
  }
}

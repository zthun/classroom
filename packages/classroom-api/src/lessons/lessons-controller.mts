import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { IZLesson } from '@zthun/classroom-school';
import { IZDataRequestQuery, IZPage, ZDataRequestBuilder } from '@zthun/helpful-query';
import { IZResourceGetService, IZResourceListService } from '../resource/resource-service';
import { ZGetToken, ZListToken } from '../resource/resource-tokens';

@ApiTags('Lessons')
@Controller('lessons')
export class ZLessonsController {
  public constructor(
    @Inject(ZListToken) private readonly _listService: IZResourceListService<IZLesson>,
    @Inject(ZGetToken) private readonly _getService: IZResourceGetService<IZLesson>
  ) {}

  @Get()
  public list(@Query() query: IZDataRequestQuery): Promise<IZPage<IZLesson>> {
    return this._listService.list(new ZDataRequestBuilder().query(query).build());
  }

  @ApiParam({ type: 'string', name: 'identification', description: 'The guid id of the course to retrieve' })
  @Get(':identification')
  public get(@Param('identification') identification: string): Promise<IZLesson> {
    return this._getService.get(identification);
  }
}

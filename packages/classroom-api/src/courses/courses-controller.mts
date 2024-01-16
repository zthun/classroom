import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IZCourse } from '@zthun/classroom-school';
import { IZDataRequestQuery, IZPage, ZDataRequestBuilder } from '@zthun/helpful-query';
import { IZResourceGetService, IZResourceListService } from '../resource/resource-service';
import { ZGetToken, ZListToken } from '../resource/resource-tokens';

@ApiTags('Courses')
@Controller('courses')
export class ZCoursesController {
  public constructor(
    @Inject(ZListToken) private readonly _listService: IZResourceListService<IZCourse>,
    @Inject(ZGetToken) private readonly _getService: IZResourceGetService<IZCourse>
  ) {}

  @ApiQuery({ name: 'filter', type: 'string', required: false, description: 'The filter parameters to query the list.' })
  @ApiQuery({ name: 'sort', type: 'string', required: false, description: 'The sort parameters to order the results by.' })
  @ApiQuery({ name: 'page', type: 'number', required: false, description: 'Which page you want.  Defaults to 1.' })
  @ApiQuery({ name: 'size', type: 'number', required: false, description: 'The total number of items you want on a page.  Defaults to infinite.' })
  @ApiQuery({ name: 'search', type: 'string', required: false, description: 'Search criteria text.' })
  @ApiResponse({ status: 200, description: 'Request is successful' })
  @ApiResponse({ status: 400, description: 'Improper formatting for query parameters' })
  @Get()
  public list(@Query() query: IZDataRequestQuery): Promise<IZPage<IZCourse>> {
    return this._listService.list(new ZDataRequestBuilder().query(query).build());
  }

  @ApiParam({ type: 'string', name: 'identification', description: 'The _id of the course to retrieve' })
  @ApiResponse({ status: 200, description: 'Request is successful' })
  @ApiResponse({ status: 404, description: 'A entity with the given identification cannot be found' })
  @Get(':identification')
  public get(@Param('identification') identification: string): Promise<IZCourse> {
    return this._getService.get(identification);
  }
}

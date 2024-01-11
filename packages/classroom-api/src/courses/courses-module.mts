import { Module } from '@nestjs/common';
import { ZDatabaseModule } from '../database/database-module.mjs';
import { ZGetToken, ZListToken } from '../resource/resource-tokens';
import { ZCoursesController } from './courses-controller.mjs';
import { ZCoursesGetService } from './courses-get-service';
import { ZCoursesListService } from './courses-list-service';

@Module({
  imports: [ZDatabaseModule],
  controllers: [ZCoursesController],
  providers: [
    {
      provide: ZListToken,
      useClass: ZCoursesListService
    },
    {
      provide: ZGetToken,
      useClass: ZCoursesGetService
    }
  ]
})
export class ZCoursesModule {}

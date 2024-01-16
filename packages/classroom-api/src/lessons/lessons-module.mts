import { Module } from '@nestjs/common';
import { ZDatabaseModule } from '../database/database-module.mjs';
import { ZGetToken, ZListToken } from '../resource/resource-tokens';
import { ZLessonsController } from './lessons-controller.mjs';
import { ZLessonsGetService } from './lessons-get-service';
import { ZLessonsListService } from './lessons-list-service';

@Module({
  imports: [ZDatabaseModule],
  controllers: [ZLessonsController],
  providers: [
    {
      provide: ZListToken,
      useClass: ZLessonsListService
    },
    {
      provide: ZGetToken,
      useClass: ZLessonsGetService
    }
  ]
})
export class ZLessonsModule {}

import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ZCoursesModule } from '../courses/courses-module.mjs';
import { ZLessonsModule } from '../lessons/lessons-module.mjs';

@Module({
  imports: [ZCoursesModule, ZLessonsModule, ThrottlerModule.forRoot({ throttlers: [{ ttl: 10, limit: 100 }] })],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }]
})
export class ZSchoolModule {}

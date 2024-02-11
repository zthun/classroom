import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { IZCourse, IZLesson, ZCourseBuilder, ZLessonBuilder } from '@zthun/classroom-school';
import { IZDatabaseDocument, ZDatabaseOptionsBuilder } from '@zthun/dalmart-db';
import { IZDatabaseServer, ZDatabaseServerDocument } from '@zthun/dalmart-memory';
import { createGuid } from '@zthun/helpful-fn';
import { ZHttpCodeClient, ZHttpCodeSuccess } from '@zthun/webigail-http';
import request from 'supertest';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { ZClassroomCollection, ZDatabaseToken } from '../database/database.mjs';
import { ZLessonsModule } from './lessons-module.mjs';

describe('LessonsApi', () => {
  const endpoint = 'lessons';

  let $basics: IZCourse;
  let $basics101: IZLesson;
  let $basics102: IZLesson;
  let $typescript: IZCourse;
  let $typescript101: IZLesson;
  let lessons: IZLesson[];

  let dal: IZDatabaseDocument;
  let server: IZDatabaseServer<IZDatabaseDocument>;
  let _target: INestApplication<any>;

  const createTestTarget = async () => {
    const module = await Test.createTestingModule({ imports: [ZLessonsModule] })
      .overrideProvider(ZDatabaseToken)
      .useValue(dal)
      .compile();

    _target = module.createNestApplication();
    await _target.init();
    return _target;
  };

  beforeAll(async () => {
    const options = new ZDatabaseOptionsBuilder().database('lessons-test-database').timeout(30000).build();
    server = new ZDatabaseServerDocument();
    dal = await server.start(options);
  });

  afterAll(async () => {
    await server.stop();
  });

  beforeEach(async () => {
    $basics = new ZCourseBuilder().id('basics').name('Basics').build();
    $basics101 = new ZLessonBuilder()
      .id('basics-101', 101)
      .name('Basics 101 - The DEBTS Daemon')
      .course($basics)
      .build();
    $basics102 = new ZLessonBuilder().id('basics-102', 102).name('Basics 102 - Command Line').course($basics).build();
    $typescript = new ZCourseBuilder().id('typescript').name('TypeScript').build();
    $typescript101 = new ZLessonBuilder()
      .id('typescript-101', 101)
      .name('TypeScript 101 - Introduction')
      .course($typescript._id)
      .build();

    lessons = [$basics101, $basics102, $typescript101];

    await dal.delete(ZClassroomCollection.Lessons);
    await dal.create(ZClassroomCollection.Lessons, lessons);
  });

  afterEach(async () => {
    await _target?.close();
  });

  describe('List', () => {
    it('should list all lessons', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const actual = await request(target.getHttpServer()).get(`/${endpoint}`);
      // Assert.
      expect(actual.status).toEqual(ZHttpCodeSuccess.OK);
      expect(actual.body.count).toEqual(lessons.length);
      expect(actual.body.data).toEqual(lessons);
    });

    it('should list lessons by course id sorted by number', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const actual = await request(target.getHttpServer()).get(
        `/${endpoint}?filter=eq(courseId, "${$basics._id}")&sort=asc(lessonNumber)`
      );
      // Assert.
      expect(actual.status).toEqual(ZHttpCodeSuccess.OK);
      expect(actual.body.count).toEqual(2);
      expect(actual.body.data).toEqual([$basics101, $basics102]);
    });
  });

  describe('Get', () => {
    it('should retrieve the specific lesson', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const actual = await request(target.getHttpServer()).get(`/${endpoint}/${$basics102._id}`);
      // Assert.
      expect(actual.status).toEqual(ZHttpCodeSuccess.OK);
      expect(actual.body).toEqual($basics102);
    });

    it('should return a not found error if the course cannot be found', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const actual = await request(target.getHttpServer()).get(`/${endpoint}/${createGuid()}`);
      // Assert.
      expect(actual.status).toEqual(ZHttpCodeClient.NotFound);
    });
  });
});

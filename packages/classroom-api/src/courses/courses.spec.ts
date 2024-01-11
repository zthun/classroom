import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { IZCourse, ZCourseBuilder } from '@zthun/classroom-school';
import { IZDatabaseDocument, ZDatabaseOptionsBuilder } from '@zthun/dalmart-db';
import { IZDatabaseServer, ZDatabaseServerDocument } from '@zthun/dalmart-memory';
import { createGuid } from '@zthun/helpful-fn';
import { ZHttpCodeClient, ZHttpCodeSuccess } from '@zthun/webigail-http';
import request from 'supertest';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { ZClassroomCollection, ZDatabaseToken } from '../database/database.mjs';
import { ZCoursesModule } from './courses-module.mjs';

describe('ZCoursesApi', () => {
  const endpoint = 'courses';

  let $typescript: IZCourse;
  let $java: IZCourse;
  let $dotnet: IZCourse;
  let courses: IZCourse[];

  let dal: IZDatabaseDocument;
  let server: IZDatabaseServer<IZDatabaseDocument>;
  let _target: INestApplication<any>;

  const createTestTarget = async () => {
    const module = await Test.createTestingModule({ imports: [ZCoursesModule] })
      .overrideProvider(ZDatabaseToken)
      .useValue(dal)
      .compile();

    _target = module.createNestApplication();
    await _target.init();
    return _target;
  };

  beforeAll(async () => {
    const options = new ZDatabaseOptionsBuilder().database('courses-test-database').timeout(30000).build();
    server = new ZDatabaseServerDocument();
    dal = await server.start(options);
  });

  afterAll(async () => {
    await server.stop();
  });

  beforeEach(async () => {
    $typescript = new ZCourseBuilder().id('typescript').name('TypeScript').build();
    $java = new ZCourseBuilder().id('java').name('Java').build();
    $dotnet = new ZCourseBuilder().id('dotnet').name('DotNet').build();

    courses = [$typescript, $java, $dotnet];

    await dal.delete(ZClassroomCollection.Courses);
    await dal.create(ZClassroomCollection.Courses, courses);
  });

  afterEach(async () => {
    await _target?.close();
  });

  describe('List', () => {
    it('should list all courses', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const actual = await request(target.getHttpServer()).get(`/${endpoint}`);
      // Assert.
      expect(actual.status).toEqual(ZHttpCodeSuccess.OK);
      expect(actual.body.count).toEqual(courses.length);
      expect(actual.body.data).toEqual(courses);
    });
  });

  describe('Get', () => {
    it('should retrieve the specific course', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const actual = await request(target.getHttpServer()).get(`/${endpoint}/${$typescript._id}`);
      // Assert.
      expect(actual.status).toEqual(ZHttpCodeSuccess.OK);
      expect(actual.body).toEqual($typescript);
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

import { IZCircusDriver, IZCircusSetup, ZCircusBy } from '@zthun/cirque';
import { ZCircusSetupRenderer } from '@zthun/cirque-du-react';
import { IZLesson, ZLessonBuilder, ZVideoBuilder } from '@zthun/classroom-school';
import { ZTestRouter } from '@zthun/fashion-boutique';
import { ZDataSourceStatic } from '@zthun/helpful-query';
import { IZRestfulService } from '@zthun/webigail-rest';
import { MemoryHistory, createMemoryHistory } from 'history';
import React from 'react';
import { Mocked, afterEach, beforeEach, describe, expect, it } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { Routes } from '../routes.mjs';
import { ZLessonsPage } from './lessons-page';
import { ZLessonsPageComponentModel } from './lessons-page.cm.mjs';
import { ZLessonsServiceContext } from './lessons-service.mjs';

describe('ZLessonsPage', () => {
  let typescript101: IZLesson;
  let typescript102: IZLesson;
  let basics101: IZLesson;
  let lessons: Mocked<IZRestfulService<IZLesson>>;
  let history: MemoryHistory;

  let _renderer: IZCircusSetup<IZCircusDriver>;
  let _driver: IZCircusDriver;

  const createTestTarget = async () => {
    const element = (
      <ZTestRouter navigator={history} location={history.location}>
        <ZLessonsServiceContext.Provider value={lessons}>
          <ZLessonsPage />
        </ZLessonsServiceContext.Provider>
      </ZTestRouter>
    );
    _renderer = new ZCircusSetupRenderer(element);
    _driver = await _renderer.setup();
    return ZCircusBy.first(_driver, ZLessonsPageComponentModel);
  };

  afterEach(async () => {
    await _driver?.destroy?.call(_driver);
    await _renderer?.destroy?.call(_renderer);
  });

  beforeEach(() => {
    typescript101 = new ZLessonBuilder()
      .course('typescript')
      .id('typescript-101-intro-to-typescript', 101)
      .name('Introduction to TypeScript')
      .video(new ZVideoBuilder().youTube('id-for-typescript-101').build())
      .build();

    typescript102 = new ZLessonBuilder()
      .course('typescript')
      .id('typescript-102-intro-to-typescript', 102)
      .name('Variables')
      .video(new ZVideoBuilder().youTube('id-for-typescript-102').build())
      .build();

    basics101 = new ZLessonBuilder()
      .course('basics')
      .id('basics-101-the-debts-daemon', 101)
      .name('The DEBTS Daemon')
      .video(new ZVideoBuilder().youTube('id-for-basics-101').build())
      .build();

    const _lessons = new ZDataSourceStatic([typescript102, typescript101, basics101]);

    lessons = mock<IZRestfulService<IZLesson>>();
    lessons.count.mockImplementation((r) => _lessons.count(r));
    lessons.retrieve.mockImplementation((r) => _lessons.retrieve(r));

    history = createMemoryHistory();
  });

  it('should render the list of lessons', async () => {
    // Arrange.
    const target = await createTestTarget();
    // Act.
    const lessons = await target.lessons();
    // Assert.
    expect(lessons.length).toEqual(3);
  });

  it('should navigate to a specific lesson', async () => {
    // Arrange.
    const target = await createTestTarget();
    const lesson = await target.lesson(typescript102._id);
    const expected = Routes.lesson(typescript102._id);
    // Act.
    const goLearn = await lesson.goLearn();
    await goLearn.click();
    const actual = history.location.pathname;
    // Assert.
    expect(actual).toEqual(expected);
  });
});

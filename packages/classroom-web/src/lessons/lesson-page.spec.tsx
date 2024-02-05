import { IZCircusDriver, IZCircusSetup, ZCircusBy } from '@zthun/cirque';
import { ZCircusSetupRenderer } from '@zthun/cirque-du-react';
import { IZLesson, ZLessonBuilder, ZVideoBuilder } from '@zthun/classroom-school';
import { ZTestRouter } from '@zthun/fashion-boutique';
import { IZRestfulService } from '@zthun/webigail-rest';
import { MemoryHistory, createMemoryHistory } from 'history';
import React from 'react';
import { Mocked, afterEach, beforeEach, describe, expect, it } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { Routes } from '../routes.mjs';
import { ZLessonPage } from './lesson-page';
import { ZLessonPageComponentModel } from './lesson-page.cm.mjs';
import { ZLessonsServiceContext } from './lessons-service.mjs';

describe('ZLessonPage', () => {
  let history: MemoryHistory;
  let lesson: IZLesson;
  let lessons: Mocked<IZRestfulService<IZLesson>>;

  let _renderer: IZCircusSetup<IZCircusDriver>;
  let _driver: IZCircusDriver;

  const createTestTarget = async () => {
    const element = (
      <ZTestRouter navigator={history} location={history.location}>
        <ZLessonsServiceContext.Provider value={lessons}>
          <ZLessonPage />
        </ZLessonsServiceContext.Provider>
      </ZTestRouter>
    );

    _renderer = new ZCircusSetupRenderer(element);
    _driver = await _renderer.setup();
    return ZCircusBy.first(_driver, ZLessonPageComponentModel);
  };

  afterEach(async () => {
    await _driver?.destroy?.call(_driver);
    await _renderer?.destroy?.call(_renderer);
  });

  beforeEach(() => {
    lesson = new ZLessonBuilder()
      .course('basics')
      .id('basics-101-the-debts-daemon', 101)
      .name('The DEBTS Daemon')
      .video(new ZVideoBuilder().youTube('id-for-basics-101').build())
      .build();

    lessons = mock<IZRestfulService<IZLesson>>();
    lessons.get.mockResolvedValue(lesson);

    history = createMemoryHistory({ initialEntries: [Routes.lesson(lesson._id)] });
  });

  it('should navigate to the lessons page when the finish button is clicked', async () => {
    // Arrange.
    const target = await createTestTarget();
    const finish = await target.navigateToEnd();
    // Act.
    await finish.click();
    const actual = history.location.pathname;
    // Assert.
    expect(actual).toEqual(Routes.lessons());
  });
});

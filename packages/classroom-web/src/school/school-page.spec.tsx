import { IZCircusDriver, IZCircusSetup, ZCircusBy } from '@zthun/cirque';
import { ZCircusSetupRenderer } from '@zthun/cirque-du-react';
import { ZTestRouter } from '@zthun/fashion-boutique';
import { MemoryHistory, createMemoryHistory } from 'history';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { Routes } from '../routes.mjs';
import { ZSchoolPage } from './school-page';
import { ZSchoolPageComponentModel } from './school-page.cm.mjs';

describe('ZSchoolPage', () => {
  let history: MemoryHistory;
  let _renderer: IZCircusSetup<IZCircusDriver>;
  let _driver: IZCircusDriver;

  const createTestTarget = async () => {
    const element = (
      <ZTestRouter location={history.location} navigator={history}>
        <ZSchoolPage />
      </ZTestRouter>
    );
    _renderer = new ZCircusSetupRenderer(element);
    _driver = await _renderer.setup();
    return ZCircusBy.first(_driver, ZSchoolPageComponentModel);
  };

  beforeEach(() => {
    history = createMemoryHistory();
  });

  afterEach(async () => {
    await _driver?.destroy?.call(_driver);
    await _renderer?.destroy?.call(_renderer);
  });

  it('should navigate to the courses page when the user clicks the get started button', async () => {
    // Arrange.
    const target = await createTestTarget();
    const courses = await target.navigateToLessons();
    // Act.
    await courses.click();
    const actual = history.location.pathname;
    // Assert.
    expect(actual).toEqual(`${Routes.lessons()}`);
  });
});

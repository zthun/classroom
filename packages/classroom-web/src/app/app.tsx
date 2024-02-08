import {
  ZBannerMain,
  ZCaption,
  ZFashionThemeContext,
  ZH1,
  ZImageSource,
  ZNavigate,
  ZNotFound,
  ZRoute,
  ZRouteMap,
  ZRouter
} from '@zthun/fashion-boutique';
import { ZSizeFixed } from '@zthun/fashion-tailor';
import { createDarkTheme } from '@zthun/fashion-theme';
import React, { LazyExoticComponent, Suspense, lazy, useMemo } from 'react';
import { Routes } from '../routes.mjs';

/**
 * Represents the root entry point into the application.
 *
 * @returns
 *        The jsx to render the fashion web application.
 */
export function ZClassroomApp() {
  const avatar = <ZImageSource src='svg/classroom.svg' height={ZSizeFixed.Medium} />;
  const theme = useMemo(() => createDarkTheme(), []);
  const prefix = (
    <div className='ZClassroomApp-description'>
      <ZH1 compact>Classroom</ZH1>
      <ZCaption compact>Let&apos;s Git Gud</ZCaption>
    </div>
  );

  const _SchoolPage = lazy(() => import('../school/school-page').then((m) => ({ default: m.ZSchoolPage })));
  const _LessonsPage = lazy(() => import('../lessons/lessons-page').then((m) => ({ default: m.ZLessonsPage })));
  const _LessonPage = lazy(() => import('../lessons/lesson-page').then((m) => ({ default: m.ZLessonPage })));

  const suspenseful = (Child: LazyExoticComponent<any>) => {
    return (
      <Suspense>
        <Child />
      </Suspense>
    );
  };

  return (
    <ZRouter>
      <ZFashionThemeContext.Provider value={theme}>
        <ZBannerMain avatar={avatar} prefix={prefix}>
          <ZRouteMap>
            <ZRoute path={Routes.school()} element={suspenseful(_SchoolPage)} />
            <ZRoute path={Routes.lessons()} element={suspenseful(_LessonsPage)} />
            <ZRoute path={Routes.lesson(':lessonIdentification')} element={suspenseful(_LessonPage)} />
            <ZRoute path='' element={<ZNavigate to='school' />} />
            <ZRoute path='*' element={<ZNotFound />} />
          </ZRouteMap>
        </ZBannerMain>
      </ZFashionThemeContext.Provider>
    </ZRouter>
  );
}

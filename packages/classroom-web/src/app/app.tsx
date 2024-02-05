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
import React, { useMemo } from 'react';
import { ZLessonsPage } from '../lessons/lessons-page';
import { Routes } from '../routes.mjs';
import { ZSchoolPage } from '../school/school-page';

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

  return (
    <ZRouter>
      <ZFashionThemeContext.Provider value={theme}>
        <ZBannerMain avatar={avatar} prefix={prefix}>
          <ZRouteMap>
            <ZRoute path={Routes.school()} element={<ZSchoolPage />} />
            <ZRoute path={Routes.lessons()} element={<ZLessonsPage />} />
            <ZRoute path='' element={<ZNavigate to='school' />} />
            <ZRoute path='*' element={<ZNotFound />} />
          </ZRouteMap>
        </ZBannerMain>
      </ZFashionThemeContext.Provider>
    </ZRouter>
  );
}

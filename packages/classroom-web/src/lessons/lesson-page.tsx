import { ZIconFontAwesome, ZWizard, useNavigate } from '@zthun/fashion-boutique';
import { ZSizeFixed } from '@zthun/fashion-tailor';
import React from 'react';
import { Routes } from '../routes.mjs';

export function ZLessonPage() {
  const navigate = useNavigate();

  return (
    <ZWizard
      className='ZLessonPage-root'
      CardProps={{ avatar: <ZIconFontAwesome name='plane-arrival' width={ZSizeFixed.Medium} /> }}
      FinishButtonProps={{ onClick: () => navigate(Routes.lessons()) }}
    >
      <div className='ZLessonsPage-coming-soon' data-name='Coming Soon!' data-description='Next up'>
        This feature is in development and will be added shortly.
      </div>
    </ZWizard>
  );
}

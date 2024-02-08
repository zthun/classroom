import { ZGridView } from '@zthun/fashion-boutique';
import { ZSizeFixed } from '@zthun/fashion-tailor';
import React from 'react';
import { ZLessonSummaryCard } from './lesson-summary-card';
import { useLessonsService } from './lessons-service.mjs';

export function ZLessonsPage() {
  const lessons = useLessonsService();

  return (
    <ZGridView
      className='ZLessonsPage-root'
      renderItem={(l) => <ZLessonSummaryCard key={l._id} lesson={l} />}
      dataSource={lessons}
      GridProps={{
        columns: '1fr 1fr 1fr 1fr',
        columnsLg: '1fr 1fr 1fr',
        columnsMd: '1fr 1fr',
        columnsSm: '1fr',
        gap: ZSizeFixed.Small
      }}
    />
  );
}

export default ZLessonsPage;

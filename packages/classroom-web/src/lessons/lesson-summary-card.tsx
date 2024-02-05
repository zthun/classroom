import { IZLesson } from '@zthun/classroom-school';
import { ZButton, ZCard, ZIconFontAwesome, useFashionTheme, useNavigate } from '@zthun/fashion-boutique';
import { ZSizeFixed, ZSizeVaried } from '@zthun/fashion-tailor';
import { startCase } from 'lodash-es';
import React from 'react';
import { Routes } from '../routes.mjs';

export interface IZLessonSummaryCard {
  lesson: IZLesson;
}

export function ZLessonSummaryCard(props: IZLessonSummaryCard) {
  const navigate = useNavigate();
  const { secondary } = useFashionTheme();
  const { lesson } = props;
  const heading = `${startCase(lesson.courseId)} ${lesson.lessonNumber}`;

  return (
    <ZCard
      className='ZLessonSummaryCard-root'
      avatar={<ZIconFontAwesome name='person-chalkboard' width={ZSizeFixed.Medium} />}
      heading={heading}
      subHeading={lesson.name}
      footer={
        <ZButton
          label='Go Learn'
          width={ZSizeVaried.Full}
          fashion={secondary}
          name='go-learn'
          onClick={() => navigate(Routes.lesson(lesson._id))}
        />
      }
      name={lesson._id}
    >
      {lesson.description}
    </ZCard>
  );
}

import { IZCourse } from '../course/course.mjs';
import { IZVideo } from './video.mjs';

export interface IZLesson {
  _id: string;
  lessonNumber: number;
  name: string;
  courseId?: string;
  description?: string;
  video?: IZVideo;
}

export class ZLessonBuilder {
  private _lesson: IZLesson;

  public constructor() {
    this._lesson = {
      _id: '',
      lessonNumber: 100,
      courseId: '',
      name: ''
    };
  }

  public id(val: string, num: number): this {
    this._lesson._id = val;
    this._lesson.lessonNumber = num;
    return this;
  }

  public course(courseId: IZCourse | string): this {
    this._lesson.courseId = typeof courseId === 'string' ? courseId : courseId._id;
    return this;
  }

  public name(val: string): this {
    this._lesson.name = val;
    return this;
  }

  public video(val: IZVideo): this {
    this._lesson.video = val;
    return this;
  }

  public build(): IZLesson {
    return structuredClone(this._lesson);
  }
}

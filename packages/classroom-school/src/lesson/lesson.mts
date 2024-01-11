import { IZCourse } from '../course/course.mjs';

export interface IZLesson {
  _id: string;
  name: string;
  courseId?: string;
  description?: string;
  videoUrl?: string;
  transcriptUrl?: string;
}

export class ZLessonBuilder {
  private _lesson: IZLesson;

  public constructor() {
    this._lesson = {
      _id: '',
      courseId: '',
      name: ''
    };
  }

  public id(val: string): this {
    this._lesson._id = val;
    return this;
  }

  public course(val: IZCourse | string): this {
    this._lesson.courseId = typeof val === 'string' ? val : val._id;
    return this;
  }

  public name(val: string): this {
    this._lesson.name = val;
    return this;
  }

  public video(val: string): this {
    this._lesson.videoUrl = val;
    return this;
  }

  public transcript(val: string): this {
    this._lesson.transcriptUrl = val;
    return this;
  }

  public build(): IZLesson {
    return structuredClone(this._lesson);
  }
}

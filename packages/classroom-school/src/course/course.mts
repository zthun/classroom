export interface IZCourse {
  _id: string;
  name: string;
  description?: string;
}

export class ZCourseBuilder {
  private _course: IZCourse;

  public constructor() {
    this._course = {
      _id: '',
      name: ''
    };
  }

  public id(val: string): this {
    this._course._id = val;
    return this;
  }

  public name(val: string): this {
    this._course.name = val;
    return this;
  }

  public build(): IZCourse {
    return structuredClone(this._course);
  }
}

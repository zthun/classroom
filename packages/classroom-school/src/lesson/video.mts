export enum ZVideoType {
  Unknown = 'unknown',
  YouTube = 'you-tube'
}

export interface IZVideo {
  _id: string;
  type: ZVideoType;
}

export class ZVideoBuilder {
  private _video: IZVideo;

  public constructor() {
    this._video = {
      _id: '',
      type: ZVideoType.Unknown
    };
  }

  public youTube(id: string): this {
    this._video._id = id;
    this._video.type = ZVideoType.YouTube;
    return this;
  }

  public build(): IZVideo {
    return structuredClone(this._video);
  }
}

import { ZCircusBy, ZCircusComponentModel } from '@zthun/cirque';
import { ZButtonComponentModel } from '@zthun/fashion-boutique';

export class ZSchoolPageComponentModel extends ZCircusComponentModel {
  public static readonly Selector = '.ZSchoolPage-root';

  public navigateToLessons(): Promise<ZButtonComponentModel> {
    return ZCircusBy.first(this.driver, ZButtonComponentModel, 'navigate-to-lessons');
  }
}

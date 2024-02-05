import { ZCircusBy, ZCircusComponentModel } from '@zthun/cirque';
import { ZButtonComponentModel, ZCardComponentModel } from '@zthun/fashion-boutique';
import { required } from '@zthun/helpful-fn';

export class ZLessonSummaryCardComponentModel extends ZCircusComponentModel {
  public static readonly Selector = '.ZLessonSummaryCard-root';

  public card(): Promise<ZCardComponentModel> {
    return Promise.resolve(new ZCardComponentModel(this.driver));
  }

  public async goLearn(): Promise<ZButtonComponentModel> {
    const card = await this.card();
    const footer = await required(card.footer());
    return ZCircusBy.first(footer, ZButtonComponentModel, 'go-learn');
  }
}

import { ZCircusBy, ZCircusComponentModel } from '@zthun/cirque';
import { ZGridViewComponentModel } from '@zthun/fashion-boutique';
import { ZLessonSummaryCardComponentModel } from './lesson-summary-card.cm.mjs';

export class ZLessonsPageComponentModel extends ZCircusComponentModel {
  public static readonly Selector = '.ZLessonsPage-root';

  public grid(): Promise<ZGridViewComponentModel> {
    return Promise.resolve(new ZGridViewComponentModel(this.driver));
  }

  public async lessons(): Promise<ZLessonSummaryCardComponentModel[]> {
    const grid = await this.grid();
    await grid.load();
    return ZCircusBy.all(grid.driver, ZLessonSummaryCardComponentModel);
  }

  public async lesson(id: string): Promise<ZLessonSummaryCardComponentModel> {
    const grid = await this.grid();
    await grid.load();
    return ZCircusBy.first(grid.driver, ZLessonSummaryCardComponentModel, id);
  }
}

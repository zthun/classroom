import { ZCircusComponentModel } from '@zthun/cirque';
import { ZButtonComponentModel, ZWizardComponentModel } from '@zthun/fashion-boutique';
import { required } from '@zthun/helpful-fn';

export class ZLessonPageComponentModel extends ZCircusComponentModel {
  public static readonly Selector = '.ZLessonPage-root';

  public wizard(): Promise<ZWizardComponentModel> {
    return Promise.resolve(new ZWizardComponentModel(this.driver));
  }

  public async navigateToEnd(): Promise<ZButtonComponentModel> {
    const wizard = await this.wizard();
    return required(wizard.finish());
  }
}

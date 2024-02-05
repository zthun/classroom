export abstract class Routes {
  public static school() {
    return '/school';
  }

  public static lessons() {
    return '/lessons';
  }

  public static lesson(identification: string) {
    return `${Routes.lessons()}/${identification}`;
  }
}

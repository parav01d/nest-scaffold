export class GetRecipeEvent {
  public id?: string;

  static builder() {
    return new GetRecipeEventBuilder();
  }
}

class GetRecipeEventBuilder {
  private id?: string;

  public setId(id: string) {
    this.id = id;
    return this;
  }
  build() {
    const e = new GetRecipeEvent();
    e.id = this.id;
    return e;
  }
}

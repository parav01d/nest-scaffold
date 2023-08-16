export class RecipeModel {
  private id: string;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  static builder() {
    return new RecipeModelBuilder();
  }
}

class RecipeModelBuilder {
  private id?: string;
  private name?: string;

  setId(id: string) {
    this.id = id;
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  public build() {
    return new RecipeModel(this.id!, this.name!);
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { RecipeModel } from 'Domain/Model';

export class RecipeResource {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  constructor(params: { id: string; name: string }) {
    this.id = params.id;
    this.name = params.name;
  }
  static fromModel(model: RecipeModel): RecipeResource {
    return new RecipeResource({ id: model.getId(), name: model.getName() });
  }
}

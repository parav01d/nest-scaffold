import { ApiProperty } from '@nestjs/swagger';
import { RecipeResource } from 'Application/V1/Resource';

export class GetRecipeResponse {
  @ApiProperty({ type: () => RecipeResource })
  resource: RecipeResource;
  constructor(resource: RecipeResource) {
    this.resource = resource;
  }
  static withResource(resource: RecipeResource): GetRecipeResponse {
    return new GetRecipeResponse(resource);
  }
}

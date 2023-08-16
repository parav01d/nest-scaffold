import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../../../app.service';
import { GetRecipeEvent } from 'Domain/Event';
import { RecipeResource } from '../Resource';
import { RecipeModel } from 'Domain/Model';
import { AuthorizationError, ValidationError } from 'Package/Application';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { GetRecipeResponse } from '../Response';
import { GetRecipeRequest } from '../Request';

@Controller('v1/recipe')
export class RecipeController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  @ApiTags('Recipe')
  @ApiParam(GetRecipeRequest.params.id)
  @ApiOkResponse({ type: GetRecipeResponse })
  @ApiBadRequestResponse({ type: ValidationError })
  @ApiForbiddenResponse({ type: AuthorizationError })
  getRecipe(@Param() id: string): GetRecipeResponse {
    const event = GetRecipeEvent.builder().setId(id).build();
    event;
    return GetRecipeResponse.withResource(
      RecipeResource.fromModel(
        RecipeModel.builder().setId(id).setName('Erdbäärtorte').build(),
      ),
    );
  }
}

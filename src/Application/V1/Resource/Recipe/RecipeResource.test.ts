import './RecipeResource';
import { RecipeResource } from './RecipeResource';
import { RecipeModel } from 'Domain/Model';

describe('RecipeResource', () => {
  beforeEach(() => {});
  describe('fromModel', () => {
    test('Can map recipe model {id} to resource {id}', async () => {
      const model = RecipeModel.builder()
        .setId('123')
        .setName('Erbäärkuchen')
        .build();
      const resource = RecipeResource.fromModel(model);
      expect(resource.id).toBe(model.getId());
    });
    test('Can map recipe model {name} to resource {name}', async () => {
      const model = RecipeModel.builder()
        .setId('123')
        .setName('Erbäärkuchen')
        .build();
      const resource = RecipeResource.fromModel(model);
      expect(resource.name).toBe(model.getName());
    });
  });
});

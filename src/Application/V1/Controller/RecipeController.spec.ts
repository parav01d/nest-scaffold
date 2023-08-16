import { Test, TestingModule } from '@nestjs/testing';
import { RecipeController } from './RecipeController';
import { AppService } from '../../../app.service';

describe('AppController', () => {
  let appController: RecipeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RecipeController],
      providers: [AppService],
    }).compile();

    appController = app.get<RecipeController>(RecipeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const res = appController.getRecipe('1');
      expect(res).toBe('Hello World!');
    });
  });
});

import { Module } from '@nestjs/common';
import { RecipeController } from './Controller/RecipeController';
import { AppService } from '../../app.service';

@Module({
  imports: [],
  controllers: [RecipeController],
  providers: [AppService],
})
export class AppModule {}

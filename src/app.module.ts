import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { StudentModule } from './student/student.module';
import { StudentService } from './student/service/student.service';
import { StudentController } from './student/student.controller';
import { NewsModule } from './news/news.module';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
@Module({
  imports: [UserModule, NewsModule, StudentModule],
  controllers: [AppController,UserController,StudentController,NewsController],
  providers: [AppService,UserService,StudentService,NewsService],
})
export class AppModule {}

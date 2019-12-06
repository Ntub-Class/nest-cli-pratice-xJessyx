import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { NewsModule } from './news/news.module';
import { StudentModule } from './student/student.module';
import { StudentService } from './student/service/student.service';
import { StudentController } from './student/student.controller';
@Module({
  imports: [UserModule, NewsModule, StudentModule],
  controllers: [AppController,UserController,StudentController],
  providers: [AppService,UserService,StudentService],
})
export class AppModule {}

import { Controller,Get,Param,Post,Put,Delete,Body } from '@nestjs/common';
import { StudentService } from './service/student.service';


@Controller('student')
export class StudentController {
    constructor(private readonly studentservice: StudentService) {}
    @Get()
        getAll(): string {
        return this.studentservice.getAll();
        }
        
        @Get(':id')
        getOne(@Param('id') id) {
            return this.studentservice.getOne(id);
      
        }
        @Post()
        postOne(@Body() body) {
            return this.studentservice.postOne(body);
       
        }

        @Put(':id')
        Putuser(@Param('id') id, @Body() body) {
            return this.studentservice.Putuser(id,body);
        }
        @Delete(':id')
        Deleteuser(@Param('id') id) {
        
            return this.studentservice.Deleteuser(id);
        }
      


    


}
// GET /user
// GET /user/:id
// POST /user
// PUT /user/:id
// DELTE /user/:id
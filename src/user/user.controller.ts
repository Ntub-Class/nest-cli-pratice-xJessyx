import { Controller,Get,Param,Post,Put,Delete,Body } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userservice: UserService) {}
    @Get()
        getAll(): string {
        return this.userservice.getAll();
        }
        
        @Get(':id')
        getOne(@Param('id') id) {
            return this.userservice.getOne(id);
      
        }
        @Post()
        postOne(@Body() body) {
            return this.userservice.postOne(body);
       
        }

        @Put(':id')
        Putuser(@Param('id') id, @Body() body) {
            return this.userservice.Putuser(id,body);
        }
        @Delete(':id')
        Deleteuser(@Param('id') id) {
        
            return this.userservice.Deleteuser(id);
        }
      


    


}
// GET /user
// GET /user/:id
// POST /user
// PUT /user/:id
// DELTE /user/:id
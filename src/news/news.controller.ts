import { Controller,Get,Param,Post,Put,Delete,Body } from '@nestjs/common';
import { NewsService } from './news.service';


@Controller('news')
export class NewsController {
    constructor(private readonly newsservice: NewsService) {}
    @Get()
        getAll(): string {
        return this.newsservice.getAll();
        }
        
        @Get(':id')
        getOne(@Param('id') id) {
            return this.newsservice.getOne(id);
      
        }
        @Post()
        postOne(@Body() body) {
            return this.newsservice.postOne(body);
       
        }

        @Put(':id')
        Putuser(@Param('id') id, @Body() body) {
            return this.newsservice.Putuser(id,body);
        }
        @Delete(':id')
        Deleteuser(@Param('id') id) {
        
            return this.newsservice.Deleteuser(id);
        }
      


    


}
// GET /user
// GET /user/:id
// POST /user
// PUT /user/:id
// DELTE /user/:id
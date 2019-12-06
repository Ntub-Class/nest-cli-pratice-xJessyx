import { Injectable, Body } from '@nestjs/common';

@Injectable()
export class StudentService {

    getAll(): string {
    return 'get student ok';
    }
    getOne(id: string): string {
        return `student ${id} 抓到了`;
    }
    postOne(body: any): string {
        return `post student ${body["key"]} ok `;
    }
    Putuser(id: string,body: any): string {
        return `put student ${id} ${body["key"]} ok`;
    }
    Deleteuser(id: string): string {
        return `delet student ${id} ok`;
    }
}

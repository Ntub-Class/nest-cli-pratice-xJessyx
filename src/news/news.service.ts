import { Injectable, Body } from '@nestjs/common';

@Injectable()
export class NewsService {

    getAll(): string {
    return 'get news ok';
    }
    getOne(id: string): string {
        return `news ${id} 抓到了`;
    }
    postOne(body: any): string {
        return `post news ${body["key"]} ok `;
    }
    Putuser(id: string,body: any): string {
        return `put news ${id} ${body["key"]} ok`;
    }
    Deleteuser(id: string): string {
        return `delet news ${id} ok`;
    }
}

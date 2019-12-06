import { Injectable, Body } from '@nestjs/common';

@Injectable()
export class UserService {

    getAll(): string {
    return 'get user ok';
    }
    getOne(id: string): string {
        return `user ${id} 抓到了`;
    }
    postOne(body: any): string {
        return `post user ${body["key"]} ok `;
    }
    Putuser(id: string,body: any): string {
        return `put user ${id} ${body["key"]} ok`;
    }
    Deleteuser(id: string): string {
        return `delet user ${id} ok`;
    }
}

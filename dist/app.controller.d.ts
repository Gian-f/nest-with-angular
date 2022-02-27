import { User } from './user/entities/user.entity';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getMe(user: User): User;
}

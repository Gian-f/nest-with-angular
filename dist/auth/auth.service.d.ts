import { UserService } from './../user/user.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    validateUser(email: string, password: string): Promise<{
        password: any;
        id: number;
        email: string;
        name: string;
    }>;
}

import { UserService } from './../user/user.service';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(user: User): UserToken;
    validateUser(email: string, password: string): Promise<{
        password: any;
        id: number;
        email: string;
        name: string;
    }>;
}

import { AuthRequest } from './models/AuthRequest';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: AuthRequest): import("./models/UserToken").UserToken;
}

import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        password: any;
        id: number;
        email: string;
        name: string;
    }>;
    findByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
}

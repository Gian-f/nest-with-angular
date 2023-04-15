import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    delete(id: number): Promise<User>;
}

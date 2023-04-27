import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('api/v1/users')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Cria um novo usuário.' })
  @ApiCreatedResponse({
    description: 'O usuário foi criado com sucesso.',
    type: CreateUserDto,
  })
  @ApiBody({ type: CreateUserDto })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

 @ApiOperation({ summary: 'Retorna uma lista de todos os usuários cadastrados.' })
  @ApiOkResponse({ description: 'A lista de usuários.', type: [CreateUserDto] })
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Atualiza as informações de um usuário existente.' })
  @ApiOkResponse({ description: 'As informações do usuário atualizado.', type: CreateUserDto })
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Deleta um usuário existente.' })
  @ApiOkResponse({ description: 'As informações do usuário deletado.', type: CreateUserDto })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.userService.delete(id);
  }

}
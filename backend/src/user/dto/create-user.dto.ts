import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'O email do usuário',
  })

  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'O nome do usuário',
  })

  @IsString()
  name: string;

  @ApiProperty({
    example: '(11) 99999-9999',
    description: 'O número de telefone do usuário',
  })

  @IsString()
  phone: string;

  @ApiProperty({
    example: '2001-03-23',
    description: 'A data de nascimento do usuário',
  })

  @IsDate()
  createdAt: Date;

  @ApiProperty({
    example: '2023-03-23',
    description: 'A data de atualização do registro do usuário',
  })

  @IsDate()
  updatedAt: Date;
}

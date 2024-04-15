import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  age: number;

  @IsEnum(['ADMIN', 'INTERN', 'ENGINEER'])
  role: 'ADMIN' | 'INTERN' | 'ENGINEER';
}

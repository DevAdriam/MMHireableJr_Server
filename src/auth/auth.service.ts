import { HttpException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  registerUser(dto: RegisterUserDto) {
    try {
    } catch (err) {
      throw new HttpException(
        {
          message: 'Failed to register',
          devMessage: err.message || '',
        },
        401,
      );
    }
  }
}

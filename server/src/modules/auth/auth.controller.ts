import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { LogoutGuard } from '../../common/guards/logout.guard';
import { IToken } from '../../common/interface/token.interface';
import { UserResponseMapper } from '../user/user.response.mapper';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/request/user.login-request.dto';
import { UserRegisterRequestDto } from './dto/request/user.register-request.dto';
import { UserRegisterResponseDto } from './dto/response/user.register-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({ summary: 'Register new user' })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UserRegisterResponseDto,
  })
  @Post('register')
  async registerUser(
    @Body() dto: UserRegisterRequestDto,
  ): Promise<UserRegisterResponseDto> {
    try {
      const result = await this.authService.register(dto);
      return UserResponseMapper.toDetailsDto(result);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
  })
  @Post('login')
  async login(@Body() data: UserLoginDto): Promise<IToken> {
    return await this.authService.login(data);
  }

  @UseGuards(AuthGuard(), LogoutGuard)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Successful response',
    type: 'The user is logout',
  })
  @ApiOperation({ summary: 'Logout user' })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: 'The user is logout',
  })
  @Post('logout')
  public async logout() {
    return;
  }
}

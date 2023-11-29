import { IToken } from '../../common/interface/token.interface';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/request/user.login-request.dto';
import { UserRegisterRequestDto } from './dto/request/user.register-request.dto';
import { UserRegisterResponseDto } from './dto/response/user.register-response.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(dto: UserRegisterRequestDto): Promise<UserRegisterResponseDto>;
    login(data: UserLoginDto): Promise<IToken>;
    logout(): Promise<void>;
}

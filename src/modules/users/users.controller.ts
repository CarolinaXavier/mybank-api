import { Body, Controller, Get, Logger, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/shared/jwt-auth.guard";
import { UserDto } from "./dto/user.dto";
import { User } from "./interfaces/user.interface";
import { UsersService } from "./users.service";

@Controller('api/v1/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }
    private readonly logger = new Logger(UsersController.name);

    @Post()
    @UsePipes(ValidationPipe)
    async add(
        @Body() userDto: UserDto): Promise<User> {
        return await this.usersService.add(userDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async get(): Promise<User[]> {
        return await this.usersService.get();
    }
}
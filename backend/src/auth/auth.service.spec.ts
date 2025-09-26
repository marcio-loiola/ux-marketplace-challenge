import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let userRepository: Repository<User>;
  let jwtService: JwtService;

  const mockUserRepository = {
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('should register a new user successfully', async () => {
      const createUserDto = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
      };
      const user = { id: 'some-uuid', ...createUserDto, password: 'hashedpassword' };

      mockUserRepository.findOne.mockResolvedValue(null);
      mockUserRepository.create.mockReturnValue(user);
      mockUserRepository.save.mockResolvedValue(user);

      const result = await service.register(createUserDto);
      delete user.password;
      expect(result).toEqual(user);
    });

    it('should throw a ConflictException if email already exists', async () => {
      const createUserDto = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
      };
      mockUserRepository.findOne.mockResolvedValue(new User());

      await expect(service.register(createUserDto)).rejects.toThrow(ConflictException);
    });
  });

  describe('login', () => {
    it('should return an access token for valid credentials', async () => {
      const loginDto = { email: 'test@example.com', password: 'password123' };
      const user = new User();
      user.email = loginDto.email;
      user.password = await bcrypt.hash(loginDto.password, 10);
      user.id = 'some-uuid';
      user.role = 'user';

      mockUserRepository.findOne.mockResolvedValue(user);
      (bcrypt.compare as jest.Mock) = jest.fn().mockResolvedValue(true);
      mockJwtService.sign.mockReturnValue('test-token');

      const result = await service.login(loginDto);
      expect(result).toEqual({ accessToken: 'test-token' });
    });

    it('should throw an UnauthorizedException for invalid credentials', async () => {
      const loginDto = { email: 'test@example.com', password: 'wrongpassword' };
      mockUserRepository.findOne.mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });
  });
});
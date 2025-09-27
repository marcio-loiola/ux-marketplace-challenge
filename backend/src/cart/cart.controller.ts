import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CartService } from './cart.service';
import { Request } from 'express';

@Controller('cart')
@UseGuards(AuthGuard('jwt'))
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  findOne(@Req() req: Request) {
    // A interface do usuário precisa ser estendida para incluir a propriedade 'id'
    const userId = (req.user as any).id;
    return this.cartService.findOneByUserId(userId);
  }
}
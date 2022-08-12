import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  // rate limiter
  imports: [ThrottlerModule.forRoot({
    ttl: 1,
    limit: 3,
  })],
  providers: [AppService,],
  controllers: [AppController]
})
export class AppModule { }

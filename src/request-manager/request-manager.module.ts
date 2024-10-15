import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RequestManagerService } from './request-manager.service';

@Module({
  imports:[HttpModule],
  providers: [RequestManagerService]
})
export class RequestManagerModule {}

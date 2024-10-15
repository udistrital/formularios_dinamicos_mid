import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RequestManagerService {
  constructor(private readonly httpService: HttpService) {}

  async get(id: string, url: string, ): Promise<any> {
    const response = this.httpService.get(url+`/${id}`);
    return lastValueFrom(response); 
  }

  async post(url: string,data: any): Promise<any> {
    const response = this.httpService.post(url, data);
    return lastValueFrom(response);
  }

  async update(id: string, url: string, data: any): Promise<any> {
    const response = this.httpService.put(url+`/${id}`, data);
    return lastValueFrom(response);
  }
}

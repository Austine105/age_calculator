/*eslint node/no-missing-import: "error" */

import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculateAgeDTO } from './dto/calculateAge.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get('howold')
  calculateAge(@Query(new ValidationPipe({ transform: true })) params: CalculateAgeDTO): number {

    return this.appService.calculateAge(params.dob);
  }
}

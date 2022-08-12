import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  calculateAge(dob: number): number {

    const age = new Date().getFullYear() - new Date(+dob).getFullYear();


    if (age < 1 || isNaN(age))
      throw new BadRequestException("Invalid Age passed");

    return age;

  }
}

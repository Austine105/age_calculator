import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  calculateAge(dob: number): number {

    const currentYear = new Date().getFullYear();
    const yearOfDob = new Date(+dob).getFullYear()
    new Date().getMilliseconds()
    console.log('yearOfDob: ' + yearOfDob);
    const age = currentYear - yearOfDob;


    if (age < 1 || isNaN(age))
      throw new BadRequestException("Invalid Age passed");

    return age;

  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  teamName: string;
  constructor() {
    this.teamName = null;
  }

}

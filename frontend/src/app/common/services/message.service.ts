import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Bin from '../../models/bin';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];
  binList: Bin[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  setBinList(binList: Bin[]) {
    this.binList = binList
  }

  getBinList(): Bin[] {
    return this.binList;
  }
}







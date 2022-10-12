import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {


  private avatarImage: string = 'assets/img/avatars/ch20_bg13_green0_188.jpg'
  constructor() { }


  changeAvatar(numb: number) {
    switch (numb) {
      case 1: this.avatarImage = 'assets/img/avatars/ch20_bg13_green0_188.jpg'
        break;
      case 2: this.avatarImage = 'assets/img/avatars/vice_versa.jpg'
        break;
      case 3: this.avatarImage = 'assets/img/avatars/anakin_100.jpg'
        break;
      case 4: this.avatarImage = 'assets/img/avatars/dark_vad_105.jpg'
        break;
      default: this.avatarImage = 'assets/img/avatars/ch20_bg13_green0_188.jpg'
        break;
    }
  }

  get avatar(): string{
    return this.avatarImage
  }

}

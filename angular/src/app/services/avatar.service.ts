import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {



  private avatarImage: string = 'assets/img/avatars/ch20_bg13_green0_188.jpg'
  constructor() { }

  private allAvatar: string[] = [
    'assets/img/avatars/ch20_bg13_green0_188.jpg',
    'assets/img/avatars/vice_versa.jpg',
    'assets/img/avatars/anakin_100.jpg',
    'assets/img/avatars/dark_vad_105.jpg'
  ];

  changeAvatar(numb: number) {
    switch (numb) {
      case 0: this.avatarImage = this.allAvatar[0]
        break;
      case 1: this.avatarImage = this.allAvatar[1]
        break;
      case 2: this.avatarImage = this.allAvatar[2]
        break;
      case 3: this.avatarImage = this.allAvatar[3]
        break;
      default: this.avatarImage = this.allAvatar[0]
        break;
    }
  }

  get avatar(): string{
    return this.avatarImage;
  }

get allListAvatar(): string[]{
  return this.allAvatar;
}

}

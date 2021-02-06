import {WeaponType} from './weapon-type';
import {WeaponCategory} from './weapon-category';

export class Weapon {

  public weaponType: WeaponType[];
  public weaponCategory: WeaponCategory;

  constructor(weaponType: WeaponType[], weaponCategory: WeaponCategory) {
    this.weaponType = weaponType;
    this.weaponCategory = weaponCategory;
  }
}


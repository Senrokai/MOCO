import { Injectable } from '@angular/core';
import {Weapon} from '../models/weapon';
import {WeaponType} from '../models/weapon-type';
import {WeaponCategory} from '../models/weapon-category';


@Injectable({
  providedIn: 'root'
})
export class ArchetypeService {

  private weapons: Weapon[] = [];

  constructor() {
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Energy], WeaponCategory.Revolver));
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Energy], WeaponCategory.PulseRifle));
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Energy], WeaponCategory.ScoutRifle));
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Energy], WeaponCategory.AutoRifle));
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Energy, WeaponType.ShortRange], WeaponCategory.Sidearm));
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Energy, WeaponType.ShortRange], WeaponCategory.SubMachineGun));
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Energy], WeaponCategory.BeamRifle));
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Heavy], WeaponCategory.LinearFusionRifle));
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Energy, WeaponType.Heavy], WeaponCategory.FusionRifle));
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Energy, WeaponType.Heavy], WeaponCategory.SniperRifle));
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Energy, WeaponType.Heavy], WeaponCategory.Bow));
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Energy, WeaponType.Heavy, WeaponType.ShortRange],
      WeaponCategory.Shotgun));
    this.weapons.push(new Weapon([WeaponType.Kinetic, WeaponType.Energy, WeaponType.Heavy], WeaponCategory.GrenadeLauncher));
    this.weapons.push(new Weapon([WeaponType.Heavy, WeaponType.ShortRange], WeaponCategory.Sword));
    this.weapons.push(new Weapon([WeaponType.Heavy], WeaponCategory.MachineGun));
    this.weapons.push(new Weapon([WeaponType.Heavy], WeaponCategory.RocketLauncher));
  }

  public getCineticWeapons(): Weapon[] {
    return this.weapons.filter(w => w.weaponType.includes(WeaponType.Kinetic));
  }

  public getEnergeticWeapons(): Weapon[] {
    return this.weapons.filter(w => w.weaponType.includes(WeaponType.Energy));
  }

  public getHeavyWeapons(): Weapon[] {
    return this.weapons.filter(w => w.weaponType.includes(WeaponType.Heavy));
  }

  public getCineticShortRangeWeapons(): Weapon[] {
    return this.getCineticWeapons().filter(w => w.weaponType.includes(WeaponType.ShortRange));
  }

  public getEnergeticShortRangeWeapons(): Weapon[] {
    return this.getEnergeticWeapons().filter(w => w.weaponType.includes(WeaponType.ShortRange));
  }

  public getHeavyShortRangeWeapons(): Weapon[] {
    return this.getHeavyWeapons().filter(w => w.weaponType.includes(WeaponType.ShortRange));
  }
}

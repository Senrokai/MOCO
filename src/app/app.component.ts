import {Component, OnInit} from '@angular/core';
import {ArchetypeService} from '../services/archetype.service';
import {Weapon} from '../models/weapon';
import {WeaponType} from '../models/weapon-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public title = 'MOCOApp';
  private kineticWeapons: Weapon[];
  private energyWeapons: Weapon[];
  private heavyWeapons: Weapon[];
  private kineticShortRangeWeapons: Weapon[];
  private energyShortRangeWeapons: Weapon[];
  private heavyShortRangeWeapons: Weapon[];
  public weaponType = WeaponType;
  public tankWeapons = {
    kinetic: 'Veuillez tirer au sort !',
    energy: 'Veuillez tirer au sort !',
    heavy: 'Veuillez tirer au sort !'
  };
  public healWeapons = {
    energy: 'Veuillez tirer au sort !',
    heavy: 'Veuillez tirer au sort !'
  };
  public dpsWeapons = {
    kinetic: 'Veuillez tirer au sort !',
    energy: 'Veuillez tirer au sort !',
    heavy: 'Veuillez tirer au sort !'
  };

  constructor(private archetypeService: ArchetypeService) {
    this.kineticWeapons = this.archetypeService.getCineticWeapons();
    this.energyWeapons = this.archetypeService.getEnergeticWeapons();
    this.heavyWeapons = this.archetypeService.getHeavyWeapons();
    this.kineticShortRangeWeapons = this.archetypeService.getCineticShortRangeWeapons();
    this.energyShortRangeWeapons = this.archetypeService.getEnergeticShortRangeWeapons();
    this.heavyShortRangeWeapons = this.archetypeService.getHeavyShortRangeWeapons();
  }

  public random(max: number): number{
    return Math.floor(Math.random() * max);
  }

  public generateTankWeapons(): any {
    this.tankWeapons.kinetic = this.kineticShortRangeWeapons[this.random(this.kineticShortRangeWeapons.length)].weaponCategory.toString();
    this.tankWeapons.energy = this.energyShortRangeWeapons[this.random(this.energyShortRangeWeapons.length)].weaponCategory.toString();
    this.tankWeapons.heavy = this.heavyShortRangeWeapons[this.random(this.heavyShortRangeWeapons.length)].weaponCategory.toString();
  }

  public generateHealWeapons(): any {
    this.healWeapons.energy = this.energyWeapons[this.random(this.energyWeapons.length)].weaponCategory.toString();
    this.healWeapons.heavy = this.heavyWeapons[this.random(this.heavyWeapons.length)].weaponCategory.toString();
  }

  public generateDPSWeapons(): any {
    this.dpsWeapons.kinetic = this.kineticWeapons[this.random(this.kineticWeapons.length)].weaponCategory.toString();
    this.dpsWeapons.energy = this.energyWeapons[this.random(this.energyWeapons.length)].weaponCategory.toString();
    this.dpsWeapons.heavy = this.heavyWeapons[this.random(this.heavyWeapons.length)].weaponCategory.toString();
  }


}

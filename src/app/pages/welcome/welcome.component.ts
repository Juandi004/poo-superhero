import { Component, OnInit } from '@angular/core';
import {HeroComponent} from "../../components/hero/hero.component";
import { MajorComponent } from '../../major/major.component';
import { VillagerComponent } from '../../components/villager/villager.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [
    HeroComponent, MajorComponent, VillagerComponent
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}

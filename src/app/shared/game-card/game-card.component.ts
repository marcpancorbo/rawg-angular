import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Game } from '../../core/models/game';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input({ required: true }) game: Game;
}

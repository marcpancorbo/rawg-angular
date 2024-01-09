import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetails } from '../../../../core/models/game-details';

@Component({
  selector: 'app-game-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './game-detail-page.component.html',
  styleUrl: './game-detail-page.component.scss',
})
export class GameDetailPageComponent implements OnInit {
  gameDetails: GameDetails;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.gameDetails = this.route.snapshot.data['game'] as GameDetails;
  }
}

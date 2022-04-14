import { Component, OnInit } from '@angular/core';
import { ApolloService } from '../shared/services/apollo/apollo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly apolloService: ApolloService) {}

  ngOnInit() {}

  test() {
    this.apolloService.getAnilistData();
  }
}

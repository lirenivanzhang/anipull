import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardComponentModule } from '../shared/components/card/card.module';
import { HeaderComponentModule } from './../shared/components/header/header.module';
import { ApolloService } from './../shared/services/apollo/apollo.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    CardComponentModule,
    HeaderComponentModule,
  ],
  providers: [ApolloService],
})
export class HomeModule {}

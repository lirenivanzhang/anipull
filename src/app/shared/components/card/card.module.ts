import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardComponentModule {}

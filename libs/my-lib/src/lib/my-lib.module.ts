import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloworldComponent } from './helloworld/helloworld.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloworldComponent],
  exports: [HelloworldComponent]
})
export class MyLibModule {}

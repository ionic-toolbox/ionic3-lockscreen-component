import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LockScreenPage } from './lock-screen';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LockScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(LockScreenPage),
    ComponentsModule
  ],
})
export class LockScreenPageModule {}

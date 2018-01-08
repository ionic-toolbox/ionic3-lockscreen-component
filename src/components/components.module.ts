import { NgModule } from '@angular/core';
import { LockScreenComponent } from './lock-screen/lock-screen';
import { IonicModule } from 'ionic-angular/module';

@NgModule({
	declarations: [LockScreenComponent],
	imports: [IonicModule],
	exports: [LockScreenComponent]
})
export class ComponentsModule {}

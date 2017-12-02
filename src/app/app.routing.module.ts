import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { MainComponent, TestComponent} from './component/index';

const routes: Route[]=[
  	{
    	path: "",
        redirectTo: "/main",
        pathMatch: "full"
    },
    {
        path: "main",
        component: MainComponent
	},
	{
        path: "test",
        component: TestComponent
    }
]

@NgModule({
	imports: [
    	RouterModule.forRoot(routes, {useHash: true})
  	],
  	exports: [
  		RouterModule
  	]
})
export class AppRoutingModule { }
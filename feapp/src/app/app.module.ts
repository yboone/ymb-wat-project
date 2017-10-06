import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NavComponent } from './components/nav/nav.component';
import { NewgameComponent } from './components/newgame/newgame.component';
import { TeamModeComponent } from './components/team-mode/team-mode.component';
import { PicModeComponent } from './components/pic-mode/pic-mode.component';
import { NameModeComponent } from './components/name-mode/name-mode.component';
import { FinitModeComponent } from './components/finit-mode/finit-mode.component';
import { PicmodeNavComponent } from './components/picmode-nav/picmode-nav.component';
import { TeammodeNavComponent } from './components/teammode-nav/teammode-nav.component';
import { NamemodeNavComponent } from './components/namemode-nav/namemode-nav.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes :  Routes = [
        {path: '',  component : HomeComponent},
        {path: 'finitMode', component :  FinitModeComponent},

        {path: 'teamMode/playagain', component :  TeamModeComponent},
        {path: 'teamMode/match', component :  PicModeComponent},
        {path: 'teamMode/newgame', component :  TeamModeComponent},
        {path: 'teamMode', component :  TeamModeComponent},

        {path: 'nameMode/playagain', component :  NameModeComponent},
        {path: 'nameMode/match', component :  PicModeComponent},
        {path: 'nameMode/newgame', component :  NameModeComponent},
        {path: 'nameMode', component :  NameModeComponent},


        {path: 'picMode/playagain', component :  PicModeComponent},
        {path: 'picMode/match', component :  PicModeComponent},
        {path: 'picMode/newgame', component :  PicModeComponent},
        {path: 'picMode', component :  PicModeComponent},

        {path: 'newgame', component : PicModeComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    NewgameComponent,
    TeamModeComponent,
    PicModeComponent,
    NameModeComponent,
    FinitModeComponent,
    PicmodeNavComponent,
    TeammodeNavComponent,
    NamemodeNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

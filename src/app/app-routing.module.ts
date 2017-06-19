import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { JugarComponent } from './jugar/jugar.component';
import { VideosComponent } from './videos/videos.component';
import { CriticasComponent } from './criticas/criticas.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'criticas', component: CriticasComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'jugar', component: JugarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


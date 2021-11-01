// Importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes a los cuales les quiero hacer una pagina exclusiva
import { ArticleComponent } from './components/article/article.component';
// Array de routes
const appRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent,
  },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

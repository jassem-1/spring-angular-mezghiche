import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListArticleComponent } from './list-article/list-article.component'; // Import your article list component
import { AddArticleComponent } from './add-article/add-article.component'; // Import your add article component

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-navbar' },
  { path: 'listProvider', component: ListProviderComponent },
  { path: 'addProvider', component: AddProviderComponent },
  { path: 'updateProvider/:id', component: UpdateProviderComponent },
  { path: 'listArticle', component: ListArticleComponent }, // Route for articles list
  { path: 'addArticle', component: AddArticleComponent }, // Route for adding an article
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

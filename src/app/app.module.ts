import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RepolistComponent } from './repolist/repolist.component';
import { DirectivesComponent } from './directives/directives.component';
import {InputNumberModule} from 'primeng/inputnumber';
import { MyserviceService } from 'src/services/myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RepoProjectComponent } from './repo-project/repo-project.component';
import { HeaderComponent } from './header/header.component';
import { DataScrapingComponent } from './data-scraping/data-scraping.component';





@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    RepolistComponent,
    RoutingComponent,
    DirectivesComponent,
    RepoProjectComponent,
    HeaderComponent,
    DataScrapingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ImageModule,
    ButtonModule,
    TableModule,
    CardModule,
    DialogModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    InputNumberModule,
    HttpClientModule,
    
    



  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {}

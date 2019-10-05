import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './ui/home/home.component';
import { FolderComponent } from './ui/folder/folder.component';
import { NotesComponent } from './ui/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FolderComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

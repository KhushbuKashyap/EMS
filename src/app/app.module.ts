import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './views/layout/layout.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ngx-ckeditor';
import { ToastrModule } from 'ngx-toastr';
import { AdminPanelModule } from './views/pages/admin/adminpanel.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    // AdminviewComponent,
    // LocationattendenceComponent,
    // SafePipe,
    // TodayattendenceComponent,
    // EmployeestatisticsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AdminPanelModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    })
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

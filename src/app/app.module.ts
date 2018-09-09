import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app-routing.module'

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Material componentes necesarios
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatSlideToggleModule, MatButtonToggleModule, MatCardModule, MatButtonModule, MatToolbarModule,
  MatAutocompleteModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatSelectModule,
  MatFormFieldModule, MatInputModule, MatDatepickerModule, MatRadioModule, MatSliderModule,
  MatTabsModule, MatGridListModule, MatSnackBarModule, MatSidenavModule, MatChipsModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatListModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule,
  MatSortModule, MatStepperModule, MatTableModule, MatTooltipModule, MatMenuTrigger,
  MatPaginatorIntl, MatBadgeModule, MatBottomSheetModule, MatTreeModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher,
} from '@angular/material';

//our components
import { LoginComponent } from './component/login/login.component';
import { SidebarComponent } from './pages/principal/sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { StarUpPage } from './pages/star-up/star-up.pages';
import { SignupComponent } from './component/signup/signup.component';
import { PrincipalComponent } from './pages/principal/principal.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    PostsComponent,
    StarUpPage,
    SignupComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CdkTableModule, CdkTreeModule,
    MatChipsModule, MatDialogModule, MatDividerModule, MatTooltipModule,
    MatExpansionModule, MatListModule, MatNativeDateModule,
    MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRippleModule, MatSortModule, MatStepperModule, MatTableModule,
    MatGridListModule, MatSnackBarModule, MatSidenavModule,
    MatFormFieldModule, MatInputModule, MatButtonToggleModule, MatSlideToggleModule,
    MatButtonModule, MatCardModule, MatToolbarModule, MatAutocompleteModule,
    MatCheckboxModule, MatIconModule, MatMenuModule, MatSelectModule, MatDatepickerModule,
    MatRadioModule, MatSliderModule, MatTabsModule, MatBadgeModule, MatBottomSheetModule,
    MatTreeModule,

    RouterModule.forRoot(routes),
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

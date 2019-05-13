import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { FileReaderComponent } from './file-reader/file-reader.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { WeatherItemComponent } from './weather-app/weather-app-item.component';
import { WeatherListComponent } from './weather-app/weather-app-list.component';
import { WeatherSearchComponent } from './weather-app/weather-search.component';
import { WeatherService } from './weather-app/weather.service';
import { SideBarComponent } from './weather-app/sidebar.component';
import { NewsReaderComponent } from './news-reader/news-reader.component';
import { NewsSourcesComponent } from './news-reader/news-sources.component';
import { newsService } from './news-reader/news.service';
import { NewsSourceDetailsComponent } from './news-reader/news-source-details.component';
import { NewsArticlesComponent } from './news-reader/news-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiCalculatorComponent,
    FileReaderComponent,
    DashboardComponent,
    DemoFormComponent,
    WeatherAppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SideBarComponent,
    NewsReaderComponent,
    NewsSourcesComponent,
    NewsSourceDetailsComponent,
    NewsArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    NgxPaginationModule
  ],
  providers: [WeatherService, newsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

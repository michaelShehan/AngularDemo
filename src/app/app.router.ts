import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileReaderComponent } from './file-reader/file-reader.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { NewsReaderComponent } from './news-reader/news-reader.component'

export const router: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'bmiCalculator', component: BmiCalculatorComponent},
    {path: 'fileReader', component: FileReaderComponent},
    {path: 'demoForm', component: DemoFormComponent},
    {path: 'weatherApp', component: WeatherAppComponent},
    {path: 'newsReader', component: NewsReaderComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

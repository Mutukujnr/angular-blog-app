import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { SubcriptionFormComponent } from './subcription-form/subcription-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,CategoryNavbarComponent,FooterComponent,PostCardComponent,SubcriptionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog-app';
}

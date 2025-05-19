import { Component } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule],
})
export class AppComponent {
  title = 'blog-personal';
}

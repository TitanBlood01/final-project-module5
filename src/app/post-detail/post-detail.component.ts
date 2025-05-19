import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { Post } from "../models/post.model";

@Component({
  selector: 'app-post-detail',
  standalone: true,
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
  imports: [CommonModule, RouterModule]
})
export class PostDetailComponent implements OnInit{
  post: Post | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private postService: PostService
  ) {}

  ngOnInit() {
    this.loading = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postService.getPostById(id)
      .subscribe({
        next: (post) => {
          this.post = post;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error al cargar los post. Por favor trata de nuevo'
          this.loading=false;
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../post-card/post-card.component';
import { PostService } from '../services/post.service';
import { FormsModule } from '@angular/forms';
import { Subject, take, takeUntil } from "rxjs";
import { Post } from "../models/post.model";

@Component({
  selector: 'app-post-list',
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  imports: [CommonModule, PostCardComponent, FormsModule],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  newPostTitle = '';
  newPostContent = '';
  editandoPostId: number | null = null;
  editTitle = '';
  editContent = '';
  currentPage = 1;
  loading = false;
  error: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPosts() {
    this.loading = true;
    this.error = null;

    this.postService.loadMorePosts(this.currentPage)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (newPosts) => {
          this.posts = [...this.posts, ...newPosts];
          this.loading = false;
        }, 
        error: (error) => {
          this.error = 'Error al cargar los posts. Por favor intente de nuevo.' ;
          this.loading = false;
        }
      });
  }
  
  loadMore() {
    this.currentPage++;
    this.loadPosts();
  }

  addPost() {
    if (this.newPostTitle.trim() && this.newPostContent.trim()) {
      this.loading = true;
      this.error = null;

      this.postService.añadirPost({
        title: this.newPostTitle,
        content: this.newPostContent
      }).pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (post) => {
            this.posts.unshift(post);
            this.newPostTitle= '';
            this.newPostContent = '';
            this.loading = false;
          },
          error: (error) => {
            this.error = 'Error adding post. Please try again.';
            this.loading = false;
          }
        });
    }
  }

  deletePost(id: number){
    this.loading = true;
    this.error = null;

    this.postService.eliminarPost(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.posts = this.posts.filter(post => post.id !== id);
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error deleting post. Please try again.';
          this.loading = false;
        }
      });
  }

  empezarEdit(post: Post) {
    this.editandoPostId = post.id;
    this.editTitle = post.title;
    this.editContent = post.content;
  }

  guardarEdit() {
    if (!this.editandoPostId || !this.editTitle.trim() || !this.editContent.trim()) return;

    this.loading = true;
    this.error = null;

    this.postService.editarPost(this.editandoPostId, {
      title: this.editTitle,
      content: this.editContent
    }).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (updatedPost) => {
          const index = this.posts.findIndex(p => p.id === this.editandoPostId);
          if (index !== -1) {
            this.posts[index] = { ...this.posts[index], ...updatedPost };
          }
          this.editandoPostId = null;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error updating post. Please try again.';
          this.loading = false;
        }
      });
  }

  cancelarEdit() {
    this.editandoPostId = null;
  }
}

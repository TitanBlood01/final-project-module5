import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-card',
  standalone: true,
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
  imports: [RouterModule]
})
export class PostCardComponent {
  @Input() postData!: Post; 
  @Output() deletePost = new EventEmitter<number>(); 
  @Output() editPost = new EventEmitter<{id: number; title: string; content: string}>(); 

  onDelete() {
    this.deletePost.emit(this.postData.id); 
  }

  onEdit() {
    this.editPost.emit(this.postData);
  }
}

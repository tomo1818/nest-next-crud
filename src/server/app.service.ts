import { Injectable, NotFoundException } from '@nestjs/common';
import { from, of, toArray } from 'rxjs';

const BLOG_POSTS = [
  { title: '明日の練習', id: 1, description: '面白い' },
  { title: '今日の朝', id: 2, description: '良い感じ' },
  { title: '来週のイベント', id: 3, description: '楽しい' },
];

@Injectable()
export class AppService {
  getBlogPosts() {
    return from(BLOG_POSTS).pipe(toArray());
  }

  getBlogPost(postId: number) {
    const blogPost = BLOG_POSTS.find(({ id }) => id === postId);

    if (!blogPost) {
      throw new NotFoundException();
    }

    return of(blogPost);
  }
}

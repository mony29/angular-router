import { Injectable } from '@angular/core';
import { IArticle } from './iarticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getAllArticle(): IArticle[] {

    return [
      {
        id: 1,
        title: 'The modern JavaScript',
        description: 'Today, JavaScript can execute not only in the browser',
        author_name: 'Dayan Eam',
        created_at: new Date(),
        profile: "https://i.pinimg.com/564x/d8/ca/5d/d8ca5d7cf27fbad82b0ae2c93940644c.jpg"
      },
      {
        id: 2,
        title: 'Yoga is fun',
        description: 'Today, JavaScript can execute not only in the browser',
        author_name: 'Dalen Tong',
        created_at: new Date(),
        profile: "https://i.pinimg.com/736x/12/17/1a/12171a7057c0c014e0b2dc53c1ac401d.jpg"
      },
      {
        id: 3,
        title: 'Learn Maths',
        description:
          'Today, JavaScript can execute not only in the browser, but also on the server',
        author_name: 'Ta Vann',
        created_at: new Date(),
        profile: "https://i.pinimg.com/564x/1f/dd/26/1fdd264b4b531494b306bf6994d7448c.jpg"
      },
    ];

  }
}

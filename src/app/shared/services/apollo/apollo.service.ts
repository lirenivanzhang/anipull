import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ApolloService {
  constructor(private readonly apollo: Apollo) {}

  getAnilistData() {
    const query = gql`
      query ($id: Int) {
        Media(id: $id, type: ANIME) {
          id
          title {
            romaji
            english
            native
          }
        }
      }
    `;

    this.apollo
      .query({
        query: query,
        variables: {
          id: 15125,
        },
      })
      .pipe()
      .subscribe((result) => {
        console.log(result);
      });
  }
}

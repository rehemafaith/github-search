
export class User {
  name:string;
  avatar:string;
  following: string;
  followers: string;
  repos=[];
  constructor(private object:JSON){
    this.name=object['name'];
    this.avatar=object['avatar_url'];
    this.followers=object['followers_url'];
    this.following=object['following_url'];
  }
}
// link to endpoints  https://api.github.com/users/${username}?access_token=${apikey}
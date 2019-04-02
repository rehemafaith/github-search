import {User} from './user';

export class Repo {
  owner:User;
  repoName:string;
  repoLink:string;
  repoDescription:string;

  constructor(private object:JSON ){
    this.owner = new User(object['owner']);
    this.repoName = object['name'];
    this.repoLink = object['html_url'];
    this.repoDescription = object['description'];
  }
}

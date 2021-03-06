
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs";
 
import {UserModel} from "../model/userModel";

import { map } from "rxjs/operators";


 
@Injectable()
export class Users {
    private userUrl = "http://localhost:3000/user";
    private EdituserUrl = "http://localhost:3000/user/edit";
    private userlogin= "http://localhost:3000/login";
    
    username :any;
 
    constructor(private  http: Http) {
      
    }

    
/*     public getUsers(dataURL:string){
        
        return this.http.get(dataURL)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error || 'Server error'));
    } */
    
    public getUsers() {
        return this.http.get(this.userUrl)
          .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error || 'Server error'));
      }

      getUser(id: number): Observable<UserModel | undefined> {
        return this.getUsers()
          .pipe(
            map((users: UserModel[]) => users.find(p => p.id === id))
          );
      }

      deleteUser(_id: number) {
        console.log("deleteUser  "+this.userUrl  +`/${_id}`);
        return this.http.delete(this.userUrl  +`/${_id}`);
        
      }
  
    
    postUser(user: UserModel){
        console.log("jjjddddd")
        return this.http.post(this.userUrl, user);
      }

    EditUser(user: UserModel){
        return this.http.post(this.EdituserUrl , user);
      }


      getAllUsers(){
        return this.http.get(this.userUrl)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
      }   

}
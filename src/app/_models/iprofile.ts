export class Iprofile {
  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
    public dateOfBirth: Date,
    public facebookId: string,
    public twitterId: string,
    public about: string,
    public userType:Boolean=true
  ) {}
}

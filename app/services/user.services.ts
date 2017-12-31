export class UserService {

    static NAME: string = 'userService';

    static $inject: string[] = ['$q', '$http'];

    constructor(protected $q: ng.IQService, protected $http: ng.IHttpService) {
        // no action
    }

    public getAll(): angular.IHttpPromise<any> {
        return this.$http.get('https://jsonplaceholder.typicode.com/users');
    }

    public getOne(id: Number): angular.IHttpPromise<any> {
        return this.$http.get('https://jsonplaceholder.typicode.com/users/' + id);
    }
}

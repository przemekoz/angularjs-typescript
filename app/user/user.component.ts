import { UserService } from '../services/user.services';

class UserController implements ng.IController {
    static $inject: string[] = ['userService', '$state'];
    users: any;
    constructor(public user: UserService, public $state: ng.ui.IStateService) {
        this.user.getAll().then((data) => {
            this.users = data.data;
        });
    }

    public show(id: string): void {
        console.log(id + '.');
    }
}

export class UserComponent implements ng.IComponentOptions {
    static NAME: string = 'userView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = UserController;
        this.templateUrl = require('./user.html');
    }
}

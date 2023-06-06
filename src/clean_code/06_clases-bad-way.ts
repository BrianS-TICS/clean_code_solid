(() => {


    // No aplicando el principio de resonsabilidad unica

    type Gender = 'M' | 'F';

    class Person {

        constructor(
            public name: string,
            public gendler: Gender,
            public birtdate: Date
        ) { }
    }

    type Rol = 'Admin' | 'Regular' | 'Vip'
    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: Rol,
            name: string,
            gendler: Gender,
            birtdate: Date
        ) {
            super(name, gendler, birtdate)
            this.lastAccess = new Date()
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: Rol,
            name: string,
            gendler: Gender,
            birtdate: Date

        ) {
            super(email, role, name, gendler, birtdate)
        }
    }


    const newUser = new User('briansanchezaguilar@gmail.com', 'Regular', 'Brian', "M", new Date('2001-07-27'))
    console.log(newUser);

    const userSettings = new UserSettings(
        'usr/home',
        'home',
        'Brian@gmail.com',
        'Regular',
        'Brian Sanchez',
        'M',
        new Date('2001-07-27')
    )

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });

})();
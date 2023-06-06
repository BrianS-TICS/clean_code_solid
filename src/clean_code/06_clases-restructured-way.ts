(() => {


    // No aplicando el principio de resonsabilidad unica

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birtdate: Date;
    }

    class Person {

        public name: string;
        public gender: Gender;
        public birtdate: Date;

        constructor({ name, gender, birtdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birtdate = birtdate;
        }

    }


    interface UserProps {
        email: string;
        role: Rol;
        name: string;
        gender: Gender,
        birtdate: Date
    }

    type Rol = 'Admin' | 'Regular' | 'Vip'

    class User extends Person {
        public lastAccess: Date;

        public email: string;
        public role: Rol;

        constructor({ email, role, name, gender, birtdate }: UserProps) {
            super({ name, gender, birtdate })
            this.email = email,
                this.role = role;
            this.lastAccess = new Date()
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: Rol;
        name: string;
        gender: Gender;
        birtdate: Date;
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            {
                workingDirectory,
                lastOpenFolder,
                email,
                role,
                name,
                gender,
                birtdate
            }: UserSettingsProps
        ) {
            super({ email, role, name, gender, birtdate })
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;

        }
    }


    // const newUser = new User('briansanchezaguilar@gmail.com', 'Regular', 'Brian', "M", new Date('2001-07-27'))
    // console.log(newUser);

    const userSettings = new UserSettings(
        {
            workingDirectory: 'usr/home',
            lastOpenFolder: 'home',
            email: 'Brian@gmail.com',
            role: 'Regular',
            name: 'Brian Sanchez',
            gender: 'M',
            birtdate: new Date('2001-07-27')
        }
    )

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });

})();
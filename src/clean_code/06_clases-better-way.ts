(() => {


    // Aplicando el principio de resonsabilidad unica
    // Priorisar la composicion frente a la herencia

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
    }

    type Rol = 'Admin' | 'Regular' | 'Vip'

    class User {

        public lastAccess: Date;
        public email: string;
        public role: Rol;

        constructor({ email, role }: UserProps) {
            this.email = email,
                this.role = role;
            this.lastAccess = new Date()
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            {
                workingDirectory,
                lastOpenFolder,
            }: SettingsProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;

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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor(
            {
                name, gender, birtdate,
                email, role,
                workingDirectory, lastOpenFolder

            }: UserSettingsProps
        ) {
            this.person = new Person({ name, gender, birtdate });
            this.user = new User({ email, role })
            this.settings = new Settings({ workingDirectory, lastOpenFolder })
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

    console.log({ userSettings, areCredentialsValid: userSettings.user.checkCredentials() });

})();
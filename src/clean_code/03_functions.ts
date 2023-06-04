(() => {

    function getMovieById(movieId: string) {
        console.log({ movieId });
    }

    function getAllMovieCastByMovieId(movieId: string) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getBiographyActorByActorId(ActorId: string) {
        console.log({ ActorId });
    }

    interface Movie {
        cast: string[],
        description: string,
        rating: number,
        title: string,
    }

    // Crear una película
    function createMovie({ title, description, rating, cast }: Movie): void {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor

    async function validNewName(fullName: string) {
        if (fullName === 'fernando') return false;
        return true;
    }

    async function createActor(fullName: string, birthdate: Date): Promise<any> {

        const isANewName = await validNewName(fullName)
        if (!isANewName) return false;

        console.log('Crear actor' + birthdate);
        return isANewName;

    }


    // Continuar

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        // The Shortest way 
        //const result = isDead ? 1500 : (isSeparated ? 2500 : (isRetired ? 3000 : 4000));

        if (isDead) return 1500;
    
        if (isSeparated) return 2500;
    
        if (isRetired) return 3000;
    
        return 4000;

    }


})();
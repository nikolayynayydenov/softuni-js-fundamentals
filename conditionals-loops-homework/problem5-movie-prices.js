function calculatePrice([movie, dayOfWeek]) {
    [movie, dayOfWeek] = [movie, dayOfWeek].map(a => a.toLowerCase());

    let movies = {
        theGodfather: 'the godfather',
        schindler: 'schindler\'s list',
        casablanca: 'casablanca',
        wizard: 'the wizard of oz'
    };

    let matrix = {
        monday: {
            [movies.theGodfather]: 12,
            [movies.schindler]: 8.5,
            [movies.casablanca]: 8,
            [movies.wizard]: 10
        },

        tuesday: {
            [movies.theGodfather]: 10,
            [movies.schindler]: 8.5,
            [movies.casablanca]: 8,
            [movies.wizard]: 10
        },

        wednesday: {
            [movies.theGodfather]: 15,
            [movies.schindler]: 8.5,
            [movies.casablanca]: 8,
            [movies.wizard]: 10
        },

        thursday: {
            [movies.theGodfather]: 12.5,
            [movies.schindler]: 8.5,
            [movies.casablanca]: 8,
            [movies.wizard]: 10
        },

        friday: {
            [movies.theGodfather]: 15,
            [movies.schindler]: 8.5,
            [movies.casablanca]: 8,
            [movies.wizard]: 10
        },

        saturday: {
            [movies.theGodfather]: 25,
            [movies.schindler]: 15,
            [movies.casablanca]: 10,
            [movies.wizard]: 15
        },

        sunday: {
            [movies.theGodfather]: 30,
            [movies.schindler]: 15,
            [movies.casablanca]: 10,
            [movies.wizard]: 15
        }
    };

    if(dayOfWeek in matrix && movie in matrix[dayOfWeek]) {
        console.log(matrix[dayOfWeek][movie].toFixed(2));
    }
    else {
        console.log('error');
    }
}

calculatePrice(['Schindler\'s List', 'mondhay']);
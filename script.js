    // ## Array Cardio Day 2

    const people = [{
            name: 'Derek',
            year: 1988
        },
        {
            name: 'Kaitlyn',
            year: 1986
        },
        {
            name: 'Ivy',
            year: 1970
        },
        {
            name: 'Lexus',
            year: 2015
        }
    ];

    const comments = [{
            text: 'OH-M-GEE!',
            id: 523423
        },
        {
            text: 'This is going on the gram',
            id: 823423
        },
        {
            text: 'You are the best',
            id: 2039842
        },
        {
            text: 'Tacos is my favorite food ever',
            id: 123523
        },
        {
            text: 'NOM NOM NOM!',
            id: 542328
        }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // const isAdult = people.some(function (person) {
    //     const currentYear = (new Date()).getFullYear();
    //     if (currentYear - person.year >= 19) {
    //         return true;
    //     }
    // });

    // Shorter version below
    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

    console.log({
        isAdult
    });
    // Array.prototype.every() // is everyone 19 or older?

    const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

    console.log({
        allAdults
    });

    // Array.prototype.find()

    // const comment = comments.find(function (comment) {
    //     if (comment.id === 823423) {
    //         return true;
    //     }
    // });

    // Shorten it up

    const comment = comments.find(comment => comment.id === 823423);

    console.log(comment);

    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    console.table(comments);
    const index = comments.findIndex(comment => comment.id === 823423);

    // comments.splice(index, 1);

    // Builds new array of the comments
    const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
    ]; // Remember " ... " to spread items (Spread operators(ES6))

    console.table(newComments);
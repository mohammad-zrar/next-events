function hanlder(res, req) {
    const evenId = req.query.eventId;;

    if(req.method === 'POST') {
        const {email, name, text } = req.body;

        if(!email.includes('@') || !name || !text || text.trim() === '') {
            res.status(422).json({message: 'Invalid input.'})
            return;r  
        }

        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text
        }
        console.log('New Comment: ', newComment);
        res.status(201).json({message: 'Added comment'})
    }

    if(req.method === 'GET') {
        const dummyList = [
            {id: 'c1', name: 'Max', text: 'A first comment !'},
            {id: 'c1', name: 'Max', text: 'A Second comment !'},
            {id: 'c1', name: 'Max', text: 'A Third comment !'},
        ]

        res.status(200).json({comments: dummyList});
    }
}

export default hanlder
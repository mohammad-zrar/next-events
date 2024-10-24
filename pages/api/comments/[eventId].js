import { connectToDatabase } from "@/lib/mongodb";

async function hanlder(req, res) {
    const evenId = req.query.eventId;

    if(req.method === 'POST') {
        const {email, name, text } = req.body;

        if(!email.includes('@') || !name || !text || text.trim() === '') {
            res.status(422).json({message: 'Invalid input.'})
            return;
        }

        const newComment = {
            email,
            name,
            text,
            evenId
        }

         try { 
    const {db} = await connectToDatabase();
    await db.collection('comments').insertOne(newComment);
    res.status(201).json({message: 'Comment added successfully'})
    } catch(err) {
        res.status(501).json({message: "Not implemented"})
    }
        console.log('New Comment: ', newComment);
        res.status(201).json({message: 'Added comment'})
    }

    if(req.method === 'GET') {
    
            try { 
    const {db} = await connectToDatabase();
    const documents = await db.collection('comments').find().sort({_id: -1}).toArray();
    console.log(documents);
   res.status(200).json({comments: documents});
    } catch(err) {
        res.status(501).json({message: "Not implemented"})
    }
        

        
    }
}

export default hanlder
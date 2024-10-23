import { connectToDatabase } from "@/lib/mongodb"

async function hanlder(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email
      

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address.' })
            return
        }

        try {
            const {db} = await connectToDatabase();
            
            await db.collection('emails').insertOne({email: userEmail});

      res.status(201).json({ message: 'Data inserted' })
        } catch (err) {
            console.error(err)

            res.status(501).json({ message: 'Not Implemented' })
        }
    }

}

export default hanlder;

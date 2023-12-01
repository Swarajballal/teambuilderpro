import  express  from 'express';
import  mongoose  from 'mongoose';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const databaseUrl = process.env.DATABASE_URL;

if(!databaseUrl) {
    console.error('DATABASE_URL environment variable not set');
    process.exit(1);
}

mongoose.connect(databaseUrl, { dbName: 'teambuilder', })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use('/api/users', './routes/users');
app.use('/api/team', './routes/team');

app.listen(port, () => console.log(`Server running on port ${port}`));
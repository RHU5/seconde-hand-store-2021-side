import mongoose from 'mongoose';

mongoose.connect(
  process.env.PRODUCTION ? process.env.ATLAS_URL : process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

const db = mongoose.connection;

db.on('error', () => {
  console.error.bind(console, 'connection error:');
});
db.once('open', () => {
  console.log('Connected : MongoDB Server');
});

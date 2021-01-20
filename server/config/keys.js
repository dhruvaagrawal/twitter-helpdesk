const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: '',
  TWITTER_CONSUMER_SECRET: '',
}

const DB_USER = ''
const DB_PASSWORD = ''
const MONGODB = {
  MONGODB_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@sandbox.tzilq.mongodb.net/test?retryWrites=true&w=majority`
}

const SESSION = {
  COOKIE_KEY: "thisappisawesome"
}

const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION
}

module.exports = KEYS;

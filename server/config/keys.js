const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: '0UICWDoUqVSwwwRw8b4qAJkP4',
  TWITTER_CONSUMER_SECRET: 'T7NEpDlmpyW8pOf9WLHwmQ7zJPNABoM7s7JQX4AIGuKMjWNH4Y',
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

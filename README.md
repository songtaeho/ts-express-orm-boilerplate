# ts-express-orm-boilerplate

create ormconfig.json
```json
{
   "type": "mysql",
   "host": "",
   "port": 3306,
   "username": "",
   "password": "",
   "database": "",
   "synchronize": true,
   "logging": true,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
```
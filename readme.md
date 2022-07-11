

# Installation
- Clone the repository
```
git clone https://github.com/jotachavarria/test-jch.git
```
- Install dependencies
```

npm install
npm run build
```
- Run Test
```
npm run test
```
( * try not to have the api running in docker to perform local tests *)
- Launch demo Node in docker containers
```
docker-compose build
docker-compose up
```

- endpoint example
```
get http://localhost:3000/api/math/primes-number/15
get http://localhost:3000/api/math/primes-number/7
```


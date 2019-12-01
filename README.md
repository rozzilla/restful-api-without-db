# restful-api-without-db
## Example of RESTful API for a Blog without a DB using Node.js

To run it:

`git clone https://github.com/rozzilla/restful-api-without-db.git && cd restful-api-without-db && npm install && npm start`

To try it, use an HTTP agent or tester (like CURL).

Request examples:
### Posts post data
`curl -H "Content-Type: application/json" -X POST -d '{"name": "My first article", "url":"http://example.com", "text": ""}'  "http://localhost:3000/posts"`

### Updates post data at specific id
`curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Updated article", "url":"https://www.google.com", "text": ""}' "http://localhost:3000/posts/1"`

### Gets post data
`curl "http://localhost:3000/posts"`

### Deletes post data at specific id
`curl -X DELETE "http://localhost:3000/posts/2"`

### Posts comment
`curl -H "Content-Type: application/json" -X POST -d '{"text": "NEW COMMENT added!!!"}'  "http://localhost:3000/posts/0/comments"`

### Updates comment at specific id
`curl -H "Content-Type: application/json" -X PUT -d '{"text": "UPDATED comment!!!"}'  "http://localhost:3000/posts/0/comments/1"`

### Gets all comments
`curl "http://localhost:3000/posts/0/comments"`

### Deletes comment at specific id
`curl -X DELETE "http://localhost:3000/posts/0/comments/1"`

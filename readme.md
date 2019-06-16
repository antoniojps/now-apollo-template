# Serverless Apollo Graphql Micro-service for Now CLI

Bootstrap a serverless apollo graphql API project to deploy at now.

## Demo

Here's the demo deployed to now: [GraphQL Playground Demo](https://now-apollo-template-m65tlpnl0.now.sh/)

Test this query:

```graphql
query Books {
  books {
    id
    title
    rating
    author {
      firstName
    }
  }
}
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node
- Now CLI

### Installing

1. Clone

```
git clone https://github.com/antoniojps/now-apollo-template.git
cd now-apollo-template
```

2. Start developing

```
now dev
```

Your functions are now running at `http://localhost:3000/`!

## Deployment

To understand how to deploy read the Now CLI documentation: [Node.js](https://zeit.co/docs/v2/deployments/basics/).

```
now --target production
```

## Configuration

The base configuration is at `now.json` it instructs now to build the server.js with the `@now/node` modules.

```json
{
  "version": 2,
  "builds": [{ "src": "server.js", "use": "@now/node" }],
  "routes": [{ "src": "/.*", "dest": "server.js" }]
}
```

## Authors

- **António Santos** - [antoniosantos.me](https://antoniosantos.me)

import neo4j from 'neo4j-driver';

const db = new neo4j.GraphDatabase('http://neo4j:<password>@localhost:7474');

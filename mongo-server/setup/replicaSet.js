rsconf = {
    _id : "rs0",
    members: [
      { _id : 0, host : "mongo-rs0-1:27017" },
      { _id : 1, host : "mongo-rs0-2:27017"},
      { _id : 2, host : "mongo-rs0-3:27017" },
      { _id : 1, host : "mongo-rs0-4:27017",arbiterOnly: true},
    ]
  }
  
  rs.initiate(rsconf);
  
  rs.conf();
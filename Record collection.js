// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
function updateRecords(records, id, prop, value) {
  const testing_id = records.hasOwnProperty([id]);
  const testing_prop  = records[id].hasOwnProperty([prop]);
  if (value == "") {
    delete records[id][prop]
  }
  else if  (testing_id == true && testing_prop == false  && prop != "tracks"){
    records[id][prop]  = value
  }
  else if (testing_id == true && testing_prop == false  && prop == "tracks"){
    records[id][prop] = value
  }
  else if (testing_id == true && testing_prop == true  && prop != "tracks"){
    records[id][prop]  = value
  }
  else if (testing_id == true && testing_prop == true  && prop == "tracks"){
      records[id][prop].push(value)
  }
  return records
}

//console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
//updateRecords(recordCollection, 5439, 'artist', 'ABBA')
//console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
//console.log(updateRecords(recordCollection, 2548, "tracks", ""))

//console.log(recordCollection[1245]["tracks"].hasOwnProperty())
//console.log(recordCollection[2468]["tracks"].hasOwnProperty())
//console.log(recordCollection[1245]["tracks"].length)
//console.log(recordCollection[2468]["tracks"].length)
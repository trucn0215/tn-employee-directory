import React from "react";
import Header from "./components/Header";
import Body from "./components/Body"

class App extends React.Component{

  state = {
    users: [
      {
        "gender": "female",
        "name": {
        "title": "Miss",
        "first": "Mackenzie",
        "last": "Harris"
        },
        "location": {
        "street": {
        "number": 4118,
        "name": "Stuart Street"
        },
        "city": "Porirua",
        "state": "Hawke'S Bay",
        "country": "New Zealand",
        "postcode": 39665,
        "coordinates": {
        "latitude": "60.2250",
        "longitude": "146.0756"
        },
        "timezone": {
        "offset": "-1:00",
        "description": "Azores, Cape Verde Islands"
        }
        },
        "email": "mackenzie.harris@example.com",
        "login": {
        "uuid": "93466da4-56fd-4340-b264-3cbad7cae784",
        "username": "brownduck824",
        "password": "gabber",
        "salt": "y82mpbmj",
        "md5": "d25566d88e66b3afd3d8b4f50d60e838",
        "sha1": "a7869bc36f7715c2da6ad1525ccc02750ac093a7",
        "sha256": "a6045dd01308401d12e7ae85daaa23e1ac4614f0aa6d3bddc53e954530426ba1"
        },
        "dob": {
        "date": "1981-12-29T16:57:11.996Z",
        "age": 40
        },
        "registered": {
        "date": "2014-02-24T01:04:51.704Z",
        "age": 7
        },
        "phone": "(476)-945-2827",
        "cell": "(884)-896-6575",
        "id": {
        "name": "",
        "value": null
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/women/84.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/84.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/84.jpg"
        },
        "nat": "NZ"
        }
    ]
  }

  render(){
    return (
      <div className="container">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;

import React from "react";
import Header from "./components/Header";
import Body from "./components/Body"

class App extends React.Component {

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
      },
      {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Megan",
          "last": "Ginnish"
        },
        "location": {
          "street": {
            "number": 8692,
            "name": "Queen St"
          },
          "city": "Alma",
          "state": "New Brunswick",
          "country": "Canada",
          "postcode": "Y1Q 0Y0",
          "coordinates": {
            "latitude": "57.8499",
            "longitude": "-105.8538"
          },
          "timezone": {
            "offset": "+2:00",
            "description": "Kaliningrad, South Africa"
          }
        },
        "email": "megan.ginnish@example.com",
        "login": {
          "uuid": "bee6efab-8b92-4ec5-a8dc-04f8dca6c731",
          "username": "smallfish838",
          "password": "army",
          "salt": "I2WPyVBn",
          "md5": "6a24224974d09ff6d80da4c4425ef2bd",
          "sha1": "94ccf2fe64383c4e10ff3ca20d4692253b2d74b7",
          "sha256": "54e50f0ce0c4c83dd5ccf9dda978a2f2e4f48d3845be19d1e6e3d3d470c7574d"
        },
        "dob": {
          "date": "1961-09-10T00:11:52.128Z",
          "age": 60
        },
        "registered": {
          "date": "2004-12-03T02:47:34.009Z",
          "age": 17
        },
        "phone": "656-268-0195",
        "cell": "920-003-1115",
        "id": {
          "name": "",
          "value": null
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/52.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
        },
        "nat": "CA"
      },
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Maja",
          "last": "Nur"
        },
        "location": {
          "street": {
            "number": 3792,
            "name": "Brandts gate"
          },
          "city": "Bremanger",
          "state": "Sør-Trøndelag",
          "country": "Norway",
          "postcode": "6102",
          "coordinates": {
            "latitude": "58.2318",
            "longitude": "-70.6130"
          },
          "timezone": {
            "offset": "-6:00",
            "description": "Central Time (US & Canada), Mexico City"
          }
        },
        "email": "maja.nur@example.com",
        "login": {
          "uuid": "d528a8a4-ae12-4f8e-8000-52228f2a0e0c",
          "username": "tinybear756",
          "password": "ninja",
          "salt": "7NJ12UCN",
          "md5": "1816e5502ff67b9fe50830294e624709",
          "sha1": "3e7109624ea897b55bae98fa61a149a87f60471e",
          "sha256": "1636d257b67391ac0386dce26255d1a28d39e16529f9629f02d2c6dd46ae226d"
        },
        "dob": {
          "date": "1969-10-24T16:25:41.450Z",
          "age": 52
        },
        "registered": {
          "date": "2002-09-05T03:06:57.728Z",
          "age": 19
        },
        "phone": "37643517",
        "cell": "49100469",
        "id": {
          "name": "FN",
          "value": "24106914644"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/10.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
        },
        "nat": "NO"
      }
    ]
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Body users={this.state.users} />
      </div>
    );
  }
}

export default App;

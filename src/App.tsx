// import logo from "./logo.svg";
import "./App.css";
import teams from "./CollegeBasketballTeams.json";
import React from "react";
// import an image
import Basketball from "./basketball.jpg";

// Import teams and then pull the data away from the key
const teamsImport = teams;
const teamsList = teamsImport.teams;

// This defines the structure of the prop
interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// This class is the data for one team. It is meant to be in it's own box. I think it looks better that way.
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="background">
        <h2 id={oneTeam.school}>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <h3>
          {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

// This element is the class for the team list. It acts like a menu, linking to each individual team. It is in a box together, because it's a menu
class LongTeamList extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    const pageLink = "#" + oneTeam.school;

    return (
      <div>
        <a href={pageLink}>{oneTeam.school}</a>
      </div>
    );
  }
}

// This puts the LongTeamList class into production
function AllTeams() {
  return (
    <div className="background">
      <h1>NCAA Basketball teams:</h1>
      {teamsList.map((teamData) => (
        <LongTeamList {...teamData} />
      ))}
    </div>
  );
}

// This puts the Team class into production
function TeamList() {
  return (
    <div>
      {teamsList.map((teamData) => (
        <Team {...teamData} />
      ))}
    </div>
  );
}

// The description box
function Description() {
  return (
    <div className="background">
      <h1>NCAA March Madness Basketball</h1>
      <p>
        It's that time of year! The NCAA basketball tournament is about to
        begin. 68 teams will compete against each other to be crown the national
        champion. With so many team names floating around, it can be hard to
        keep track of who is who. Use this site to match school names with team
        names and locations.{" "}
      </p>
    </div>
  );
}

// Main app
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={Basketball}
          className="App-logo"
          alt="A spinning basketball."
        />
        <Description />
        <br />
        <AllTeams />
        <TeamList />
      </header>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import teams from "./CollegeBasketballTeams.json";
import React from "react";

const teamsImport = teams;
const teamsList = teamsImport.teams;

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

function TeamList() {
  return (
    <div>
      {teamsList.map((teamData) => (
        <Team {...teamData} />
      ))}
    </div>
  );
}

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://lh3.googleusercontent.com/proxy/vdwiQc1YvKYzGw099wDbIyT8HT0iCgFTFPhPtaCEI6FZjNg_3uzMytWlMWkGXESLqkiloQYmkzQXGWuraau4SMpHlDCWyWkhTxt_XAk4rnZJsYdwWvY"
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

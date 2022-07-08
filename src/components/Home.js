import "@/styles/Home.scss";
import backgroundVideo from "@/resources/videos/wavy_video_background.mp4";
import arrow from "@/resources/images/arrow.svg";
import lines from "@/resources/images/lines.svg";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import React from "react";

import ahmed from "@/resources/images/team-members/ahmed.png";
import graham from "@/resources/images/team-members/graham.png";
import max from "@/resources/images/team-members/max.png";
import minh from "@/resources/images/team-members/minh.png";
import mohsen from "@/resources/images/team-members/mohsen.png";
import sarah from "@/resources/images/team-members/sarah.png";
import tano from "@/resources/images/team-members/tano.png";
import tonmoy from "@/resources/images/team-members/tonmoy.png";

const teamMembers = [
  {
    name: "Mohsen Yousefian",
    role: "President",
    image: mohsen,
    bio: "Very good person, I like this person, they do cool stuff and it's fun to hang out with them, they are also very smart and active and enjoy doing stuff.",
  },
  {
    name: "Khuc Nguyen (Tano)",
    role: "Vice-President",
    image: tano,
    bio: "Very good person, I like this person, they do cool stuff and it's fun to hang out with them, they are also very smart and active and enjoy doing stuff.",
  },
  {
    name: "Ahmed S. Ahmed",
    role: "Treasurer",
    image: ahmed,
    bio: "Very good person, I like this person, they do cool stuff and it's fun to hang out with them, they are also very smart and active and enjoy doing stuff.",
  },
  {
    name: "Sarah Veloso",
    role: "Internal",
    image: sarah,
    bio: "Very good person, I like this person, they do cool stuff and it's fun to hang out with them, they are also very smart and active and enjoy doing stuff.",
  },
  {
    name: "Tonmoy Ghosh",
    role: "External",
    image: tonmoy,
    bio: "Very good person, I like this person, they do cool stuff and it's fun to hang out with them, they are also very smart and active and enjoy doing stuff.",
  },
  {
    name: "Graham Downey",
    role: "Events",
    image: graham,
    bio: "Very good person, I like this person, they do cool stuff and it's fun to hang out with them, they are also very smart and active and enjoy doing stuff.",
  },
  {
    name: "Max Abdulkhalikov",
    role: "Promotions",
    image: max,
    bio: "Very good person, I like this person, they do cool stuff and it's fun to hang out with them, they are also very smart and active and enjoy doing stuff.",
  },
  {
    name: "Hoang Minh Phan",
    role: "Vice-executive",
    image: minh,
    bio: "Very good person, I like this person, they do cool stuff and it's fun to hang out with them, they are also very smart and active and enjoy doing stuff.",
  },
];

function TeamMemberCard({ teamMemberData }) {
  const card = (
    <>
      <CardContent className="team-member">
        <div class="image-container">
          <img
            src={teamMemberData.image}
            alt={`Portrait of .devClub team member ${teamMemberData.name}`}
          />
        </div>
        <br />
        <br />
        <br />
        <Typography variant="h6" component="div">
          {teamMemberData.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {teamMemberData.role}
        </Typography>
        <Typography variant="body2">{teamMemberData.bio}</Typography>
      </CardContent>
      {/*
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        */}
    </>
  );

  return <Box sx={{ width: "100%", height: "100%" }}>{card}</Box>;
}

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-text">WELCOME TO .DEVCLUB</h1>
      <video
        className="home-video"
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
      >
        <source type="video/mp4" src={backgroundVideo} />
      </video>

      <img className="arrow-homepage" src={arrow} alt="" />
      <div className="white-background">
        <div className="info">
          <div className="aboutAndText">
            <h1 className="about-us">about us</h1>
            <h1 className="team-text">
              team that will give you the best university development
              experience.
            </h1>
          </div>
          <h1 className="description-home">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h1>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="title-container">
          <h1 className="title-content">WHAT WE DO</h1>
        </div>

        <div className="title-container">
          <h1 className="title-content">OUR TEAM</h1>
        </div>

        <img className="lines-homepage" src={lines} alt="" />

        <div className="team-members-grid">
          {teamMembers.map((teamMember) => (
            <div
              style={{
                width: 200,
                height: "100%",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <TeamMemberCard teamMemberData={teamMember} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

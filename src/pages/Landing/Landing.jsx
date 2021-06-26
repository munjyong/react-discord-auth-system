import React from 'react';

const Landing = () => {
  return (
    <div>
      <h1>
        Landing Page
      </h1>
      <button>
        <a href={"https://discord.com/api/oauth2/authorize?client_id=858064642227044352&redirect_uri=http%3A%2F%2Flocalhost%3A3003%2F&response_type=code&scope=identify%20email%20guilds%20guilds.join"}>
          Discord Auth
        </a>
      </button>
    </div>
  );
};

export default Landing;
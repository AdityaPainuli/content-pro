import React from "react";
import Image from "next/image";

const Choices = () => {
  return (
    <div>
      <h1 className="text-4xl text-white font-bold my-4">
        Dive deep into your different Content Domains 🚀
      </h1>
      <div className="flex space-x-[2rem] items-center justify-evenly">
        <div className="box-items">
          <Image
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c545.png"
            alt="youtube"
            width={150}
            height={100}
          />
          <p>Youtube</p>
        </div>
        <div className="box-items !bg-[#9147ff] text-white">
          <Image
            src="https://blog.twitch.tv/assets/uploads/03-glitch.jpg"
            alt="youtube"
            width={150}
            height={100}
          />
          <p>Twitch</p>
        </div>
        <div className="box-items">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            alt="youtube"
            width={140}
            height={100}
          />
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Choices;

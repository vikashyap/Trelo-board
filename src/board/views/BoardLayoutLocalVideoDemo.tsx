import ReactPlayer from "react-player";

export const BoardLayoutLocalVideoDemo = () => {
  return (
    <div>
      <h2>
        Demo of trelo board example video, please play the video to se the
        behaviour of application, once you add a column the video will hide
      </h2>
      <ReactPlayer
        url={"/board-demo.mov"}
        controls
        width="100%"
        height="600px"
        playing
      />
    </div>
  );
};

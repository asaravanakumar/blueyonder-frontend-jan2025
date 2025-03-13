import IGreetings from "../models/IGreetings";

type Greetings = { name: string; message: string };

// interface IGreetings {
//   name: string;
//   message?: string;
// }

// const HelloMessage = (props: { name: string; message: string }) => {
// const HelloMessage = (props: Greetings) => {
// const HelloMessage = (props: IGreetings) => {
const HelloMessage: React.FC<IGreetings> = (props: IGreetings) => {
  return (
    <section>
      <p>
        Message from {props.name}: {props.message}
      </p>
    </section>
  );
};

HelloMessage.defaultProps = {
  name: "Guest",
  message: "Hi, Hello",
};

export default HelloMessage;

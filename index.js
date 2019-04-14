function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const drumPads = [
{
  letter: "Q",
  id: "heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  letter: "W",
  id: "Dsc_Oh",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  letter: "E",
  id: "Kick_n_Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  letter: "A",
  id: "RP4_KICK_1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  letter: "S",
  id: "Cev_H2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },

{
  letter: "D",
  id: "Chord_1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },

{
  letter: "Z",
  id: "Chord_2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },

{
  letter: "X",
  id: "Chord_3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },

{
  letter: "C",
  id: "punchy_kick_1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" }];



class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeyDown",









    event => {
      if (event.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });_defineProperty(this, "handleClick",

    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {document.addEventListener('keydown', this.handleKeyDown);}componentWillUnmount() {document.removeEventlistener('keydown', this.handleKeyDown);}
  render() {
    return (
      React.createElement("div", {
        className: "drum-pad",
        id: this.props.id,
        onClick: this.handleClick },

      React.createElement("p", null, this.props.letter),
      React.createElement("audio", { className: "clip", id: this.props.letter, src: this.props.url, ref: ref => this.audio = ref })));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",





    display => {
      this.setState({ display });
    });this.state = { display: '' };}
  render() {
    return (
      React.createElement("div", { id: "drum-machine", className: "grid-container" },
      React.createElement("div", { id: "display" }, this.state.display),
      drumPads.map((d) =>
      React.createElement(DrumPad, {
        key: d.id,
        id: d.id,
        letter: d.letter,
        url: d.url,
        handleDisplay: this.handleDisplay }))));




  }}






ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
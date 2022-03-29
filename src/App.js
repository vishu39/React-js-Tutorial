import "./App.css";
import { Greet } from "./components/greet";
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Msg from "./components/msg";
import Count from "./components/count";
import Event from "./components/eventClick";
import ClassClick from "./components/classClick";
import EventBind from "./components/eventBind";
import ParentComponent from "./components/parentComponent";
import Condition from "./components/Condition";

function App() {
  return (
    <div className="App">
      <Condition />
    </div>
  );
}

export default App;

{
  /* 

 <ParentComponent></ParentComponent>

      <Event />
      <ClassClick></ClassClick>

      <EventBind></EventBind>

  <Count />
  <Msg />
  
  <Greet name="Bruce" heroName="Batman">
<p>This is children props</p>
</Greet>
<Greet name="Clark" heroName="Superman"></Greet>
<button>Action</button>
<Greet name="Lucifer" heroName="Devil"></Greet>

<Greet name="Bruce" heroName="Batman" />
<Greet name="Clark" heroName="Superman" />
<Greet name="Lucifer" heroName="Devil" />

<Welcome name="vishu">
<button>Hello</button>
</Welcome>
<Welcome name="batman"></Welcome>

<Welcome />
<Hello /> */
}

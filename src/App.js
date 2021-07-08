import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView";
import * as s from "./App.styles";

const App = () => {
  const header = {
    fullName: 'Chat Room',
    shortName: 'CR'
  }
  const sideItems = [{
    name:"Users List", to:'/userslist', icon:'icons/users.png', subMenuItems: [
    {id:1, name: "John", to: '/John'},
    {id:2, name: "Monica", to: '/Monica'},
    {id:3, name: "Mary", to: '/Mary'},
    {id:4, name: "Rohit", to: '/Rohit'},
    {id:5, name: "Bob", to: '/Bob'},  
    ]},
  ];
  const fonts = {
    header: 'Roboto',
    menu: 'Poppins'
  }

  return (
    <s.App>
      <Sidebar SidebarHeader={header} sideItems={sideItems} fonts = {fonts}/>
      <MainView />
    </s.App>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Activity from './activity/activity';
import Post from './post/post';
import Settings from './settings/settings';
import Chat from './chat/chat'
import Notification from './notification/notification';
import Search from './search/search';
import Profile from './profile/profile';
import PostActivity from './postactivity/postactivity';
import Activity_detail from './activity_detail/activity_detail';
import ErrorBanner from './component/errorbanner';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';



class ActivityPage extends React.Component{
  render(){
    return(
      <Activity user={1}/>
    );
  }
}
class ThrendPage extends React.Component{
  render(){
    return (<Post user={1} />);
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <ErrorBanner />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

class SettingsPage extends React.Component {
  render() {
    return (
      <Settings user={1} />
    );
  }
}

class ChatPage extends React.Component{
  render() {
    return (
      <Chat user={1} />
    );
  }
}

class NotificationPage extends React.Component{
  render(){
    return(
      <Notification user={1} id={this.props.params.id}/>
    );
  }
}

class Activity_detailPage extends React.Component{
  render(){
    return(
      <Activity_detail user={1} id={this.props.params.id}/>
    )
  }
}
class SearchPage extends React.Component{
   render(){
    return(
      <Search user={1}/>
    );
  }
}

class ProfilePage extends React.Component{
  render(){
    return(
      <Profile user={parseInt(this.props.params.user)} />
    );
  }
}
class PostActivityPage extends React.Component {
  render() {
    return (
      <PostActivity user={1} />
    );
  }
}

//render main
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ActivityPage} />
      <Route path="post" component={ThrendPage} />
      <Route path="settings" component={SettingsPage} />
      <Route path="chat" component={ChatPage} />
      <Route path="notification" component={NotificationPage}>
        <Route path="/notification/:id" component={NotificationPage}/>
      </Route>
      <Route path="profile" component={ProfilePage}>
        <Route path="/profile/:user" component={ProfilePage} />
      </Route>
      <Route path="activity_detail" component={Activity_detailPage}>
        <Route path="/activity_detail/:id" component={Activity_detailPage}/>
      </Route>
      <Route path="search" component={SearchPage}/>
      <Route path="postactivity" component={PostActivityPage} />
      </Route>
  </Router>

),document.getElementById('container'));
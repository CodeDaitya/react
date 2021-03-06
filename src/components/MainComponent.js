import React, { Component } from "react";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./AboutComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      comments: COMMENTS,
      promotions: PROMOTIONS
    }
  }
  
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.featured)[0]}
          promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
        />
      );
    };
    
    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}/>
      );
    }
    
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}></Menu>}></Route>
          <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders}></About>}></Route>
          <Route path="/menu/:dishId" component={DishWithId}></Route>
          <Route exact path="/contactus" component={Contact}></Route>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;

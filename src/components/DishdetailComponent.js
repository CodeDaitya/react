import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardText, BreadcrumbItem, Breadcrumb } from "reactstrap";

function RenderComments({ comments }) {
  if (comments !== null) {
    return comments.map((comment) => {
      return (
        <div key={comment.id} className="comment">
          <p>{comment.comment}</p>
          <p className="ml-1">
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </p>
        </div>
      );
    });
  } else {
    return <div></div>;
  }
}

const RenderDish = ({ dish }) => {
  if (dish !== undefined) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

const DishDetail = props => {
  if (props.dish !== null) {
    return(
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr/>
          </div>
        </div>
        <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <h3>Comments</h3>
          <RenderComments comments={props.comments} />
        </div>
        </div>
      </div>
    );
  }
  
}

export default DishDetail;

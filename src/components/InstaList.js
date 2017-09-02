import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

const PicBoxPlus = (props) => (
   <div className="picbox adder" {...props}>
          <h1>+</h1>
          <span>ADD</span>
   </div>
);

const PicBox = (props) => (
   <div className="picbox">
        <div className="pic"><img src={props.pic.picUrl} /></div>
        <div>{props.pic.description}</div>
   </div>
);


class InstaList extends Component {

  changeMode = () => {
    this.props.modChanger(1)
  }

  render() {
    if (this.props.allPicsQuery && this.props.allPicsQuery.loading) {
      return <div>Loading</div>
    }

    if (this.props.allPicsQuery && this.props.allPicsQuery.error) {
      console.log(this.props.allPicsQuery.error);
      return <div>Error</div>
    }

    const picsToRender = this.props.allPicsQuery.allPics
    
    return (
      <div>
        <PicBoxPlus onClick={this.changeMode.bind(this)} ></PicBoxPlus>
        {picsToRender.map(pic => (
          <PicBox key={pic.id} pic={pic}/>
        ))}
      </div>
    )
  }
}

const ALL_PICS_QUERY = gql`
    query AllPics {
      allPics{
        id
        description
        picUrl
      }
    }
  `;

export default  graphql(ALL_PICS_QUERY,{name: 'allPicsQuery'}) (InstaList);
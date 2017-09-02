import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

class PicCreate extends Component{

  state = {
      description: '',
      picUrl: ''
  };

  render(){
    return (
      <div className="picbox">
        <input 
          type="text" 
          placeholder="Pic url address"
          value={this.state.picUrl}
          onChange={(e) => this.setState({ picUrl: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={this.state.description}
          onChange={(e) => this.setState({ description: e.target.value })}
        />
        <button
          onClick={() => this._createLink()} 
        >
          Add
        </button>
      </div>
    );
  }

  _createLink = async () => {
    const { description, picUrl } = this.state
    const { data } = await this.props.createPicMutation({
      variables: {
        description,
        picUrl
      }
    })
    
    console.log('got data', data);
    this.props.modChanger(0);
  }

}

const CREATE_PIC_MUTATION = gql`
  mutation CreatePicMutation($picUrl: String!,$description: String!){
    createPic(
      picUrl: $picUrl,
      description: $description,
    ){
      id
      createdAt
      picUrl
      description
    }
  }
`

export default graphql(CREATE_PIC_MUTATION, { name: 'createPicMutation' }) (PicCreate)

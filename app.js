const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male"
    },
    {
      id: 3,
      age: 49,
      name: "Marta",
      sex: "female"
    },
    {
      id: 4,
      age: 19,
      name: "Stasia",
      sex: "female"
    },
    {
      id: 5,
      age: 39,
      name: "Karol",
      sex: "male"
    }
  ]
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <h3>User information:</h3>
    <p>
      Age: <strong>{user.age}</strong>
    </p>
    <p>Sex: {user.sex}</p>
  </div>
);

class ListItems extends React.Component {
  state = {
    select: "all"
  };

  handleUsersFilter = option => {
    this.setState({
      select: option
    });
  };

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        return users.map(user => <Item user={user} key={user.id} />);
      case "female":
        users = users.filter(user => user.sex === "female");
        return users.map(user => <Item user={user} key={user.id} />);
      case "male":
        users = users.filter(user => user.sex === "male");
        return users.map(user => <Item user={user} key={user.id} />);
      default:
        return "Wrong action";
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleUsersFilter.bind(this, "all")}>All</button>
        <button onClick={this.handleUsersFilter.bind(this, "female")}>
          Female
        </button>
        <button onClick={this.handleUsersFilter.bind(this, "male")}>
          Male
        </button>
        {this.usersList()}
      </div>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));

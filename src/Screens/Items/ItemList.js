import React, { Component } from "react";
import * as customer from "../CutomerList/CustomerList.style";
import ButtonText from "../../../components/ButtonText/ButtonText";
import { getCustomer, DeleteCutomer } from "../../../action/customer";
import { connect } from "react-redux";
import { FaPen, FaTrashAlt,FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchField from "react-search-field";
class CustomerList extends Component {
  state = {
    input: "",
  };
  componentDidMount() {
    this.props.getCustomer();
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  deleteCustomer = (id) => {
    this.props.DeleteCutomer(id);
  };

  render() {
    const { customers, filterIt } = this.props;
    const showingContacts =
      this.state.input === ""
        ? customers
        : customers.filter((c) => {
            return (
              c.fname.toLowerCase().includes(this.state.input.toLowerCase()) ||
              c.lname.toLowerCase().includes(this.state.input.toLowerCase())
            );
          });
    return (
      <div>
        <div>
          <customer.topBar>
            <customer.Form>
            
              <customer.Input
                value={this.state.input}
                onChange={this.handleInput}
                placeholder="Search records"
              /><customer.SearchIcon><FaSearch color="white"/></customer.SearchIcon>
            </customer.Form>

            <customer.Searchbar>
              <customer.AddButtonLink to="/create/:id">
                <ButtonText style={{ height: '40px', width: 120 }}>
                  Add Customer
                </ButtonText>
              </customer.AddButtonLink>
            </customer.Searchbar>
          </customer.topBar>
        </div>

        <customer.wrapper>
          <customer.Total>
            <customer.Heading>
              Customers{" "}
              <customer.Span>
                {showingContacts && showingContacts.length}
              </customer.Span>
            </customer.Heading>
          </customer.Total>
          <customer.Container>
            <customer.Grid_item_heading>First Name</customer.Grid_item_heading>
            <customer.Grid_item_heading>Last Name</customer.Grid_item_heading>
            <customer.Grid_item_heading>Email</customer.Grid_item_heading>
            <customer.Grid_item_heading>Phone</customer.Grid_item_heading>
            <customer.Grid_item_heading>Address</customer.Grid_item_heading>
            <customer.Grid_item_heading>Company</customer.Grid_item_heading>
            <customer.Grid_item_heading>Action</customer.Grid_item_heading>
            {showingContacts &&
              showingContacts.map((item, index) => (
                <>
                  <customer.Grid_item key={item.id}>
                    {item.fname}
                  </customer.Grid_item>
                  <customer.Grid_item>{item.lname}</customer.Grid_item>
                  <customer.Grid_item>{item.email}</customer.Grid_item>
                  <customer.Grid_item>{item.phone}</customer.Grid_item>
                  <customer.Grid_item>{item.address}</customer.Grid_item>

                  <customer.Grid_item>{item.company}</customer.Grid_item>
                  <customer.Grid_item>
                    <Link to={`/create/${item.id}`}>
                      <FaPen color="green" />
                    </Link>
                    &nbsp;&nbsp;&nbsp;{" "}
                    <Link to="/customer">
                      <FaTrashAlt
                        color="red"
                        onClick={() => this.deleteCustomer(item.id)}
                      />
                    </Link>
                  </customer.Grid_item>
                </>
              ))}
          </customer.Container>
        </customer.wrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customers: state.employees,
  };
};
export default connect(mapStateToProps, { getCustomer, DeleteCutomer })(
  CustomerList
);
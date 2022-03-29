import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import ProductsDashboard from "./screens/ProductsDashboard";
import NewProduct from "./screens/NewProduct";
import Drafts from "./screens/Drafts";
import Released from "./screens/Released";
import Comments from "./screens/Comments";
import Scheduled from "./screens/Scheduled";
import Customers from "./screens/Customers";
import CustomerList from "./screens/CustomerList";
import Promote from "./screens/Promote";
import Notification from "./screens/Notification";
import Settings from "./screens/Settings";
import UpgradeToPro from "./screens/UpgradeToPro";
import MessageCenter from "./screens/MessageCenter";
import ExploreCreators from "./screens/ExploreCreators";
import AffiliateCenter from "./screens/AffiliateCenter";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Earning from "./screens/Earning";
import Refunds from "./screens/Refunds";
import Payouts from "./screens/Payouts";
import Statements from "./screens/Statements";
import Shop from "./screens/Shop";
import PageList from "./screens/PageList";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page title="Dashboard">
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/products/dashboard"
          render={() => (
            <Page title="Products dashboard">
              <ProductsDashboard />
            </Page>
          )}
        />
        <Route
          exact
          path="/products/add"
          render={() => (
            <Page title="New product">
              <NewProduct />
            </Page>
          )}
        />
        <Route
          exact
          path="/products/drafts"
          render={() => (
            <Page title="Drafts">
              <Drafts />
            </Page>
          )}
        />
        <Route
          exact
          path="/products/released"
          render={() => (
            <Page title="Released">
              <Released />
            </Page>
          )}
        />
        <Route
          exact
          path="/products/comments"
          render={() => (
            <Page title="Comments">
              <Comments />
            </Page>
          )}
        />
        <Route
          exact
          path="/products/scheduled"
          render={() => (
            <Page title="Scheduled">
              <Scheduled />
            </Page>
          )}
        />
        <Route
          exact
          path="/customers/overview"
          render={() => (
            <Page title="Customers">
              <Customers />
            </Page>
          )}
        />
        <Route
          exact
          path="/customers/customer-list"
          render={() => (
            <Page title="Customer list">
              <CustomerList />
            </Page>
          )}
        />
        <Route
          exact
          path="/shop"
          render={() => (
            <Page wide>
              <Shop />
            </Page>
          )}
        />
        <Route
          exact
          path="/income/earning"
          render={() => (
            <Page title="Earning">
              <Earning />
            </Page>
          )}
        />
        <Route
          exact
          path="/income/refunds"
          render={() => (
            <Page title="Refunds">
              <Refunds />
            </Page>
          )}
        />
        <Route
          exact
          path="/income/payouts"
          render={() => (
            <Page title="Payouts">
              <Payouts />
            </Page>
          )}
        />
        <Route
          exact
          path="/income/statements"
          render={() => (
            <Page title="Statements">
              <Statements />
            </Page>
          )}
        />
        <Route
          exact
          path="/promote"
          render={() => (
            <Page title="Promote">
              <Promote />
            </Page>
          )}
        />
        <Route
          exact
          path="/notification"
          render={() => (
            <Page title="Notification">
              <Notification />
            </Page>
          )}
        />
        <Route
          exact
          path="/settings"
          render={() => (
            <Page title="Settings">
              <Settings />
            </Page>
          )}
        />
        <Route
          exact
          path="/upgrade-to-pro"
          render={() => (
            <Page title="Upgrade to Pro">
              <UpgradeToPro />
            </Page>
          )}
        />
        <Route
          exact
          path="/message-center"
          render={() => (
            <Page title="Message center">
              <MessageCenter />
            </Page>
          )}
        />
        <Route
          exact
          path="/explore-creators"
          render={() => (
            <Page title="Explore creators">
              <ExploreCreators />
            </Page>
          )}
        />
        <Route
          exact
          path="/affiliate-center"
          render={() => (
            <Page title="Affiliate center">
              <AffiliateCenter />
            </Page>
          )}
        />
        <Route exact path="/sign-up" render={() => <SignUp />} />
        <Route exact path="/sign-in" render={() => <SignIn />} />
        <Route exact path="/pagelist" component={PageList} />
      </Switch>
    </Router>
  );
}

export default App;

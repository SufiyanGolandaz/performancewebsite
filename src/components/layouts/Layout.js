// import Footer from "./footer";
import classes from "../css/Layout.module.css";
import { Navigation } from "./navigation";

function Layout(props) {
  console.log(props.children);
  return (
    <div>
      <Navigation  />
      <div className={classes.body}>
        <main className={classes.main}>{props.children}</main>
      </div>
       
    </div>
  );
}

export default Layout;

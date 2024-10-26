import { Fragment, useContext } from "react";
import MainHeader from "./main-header";
import Notification from "../ui/notification";
import NotificationContext from "@/store/notification-context";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotifaciton = notificationCtx.notification;


  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotifaciton && (<Notification title={activeNotifaciton.title} message={activeNotifaciton.message} status={activeNotifaciton.status} />)}
    </Fragment>
  );
}

export default Layout;

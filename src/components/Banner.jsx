import React from "react";
import { Subject } from "rxjs";
import { delay, tap } from "rxjs/operators";
export const notfication$ = new Subject();

const useNotification = stream$ => {
  const [message, setMessage] = React.useState();
  React.useEffect(() => {
    const messages = stream$
      .pipe(
        tap(message => setMessage(message)),
        delay(3000),
        tap(() => setMessage(""))
      )
      .subscribe();

    return () => messages.unubscribe();
  }, []);
  return message;
};

const Banner = () => {
  const message = useNotification(notfication$);
  return (
    <>
      {message && (
        <div className="flex items-center justify-center pa4 bg-lightest-blue navy pointer ">
          <span className="lh-title ml3">{message}</span>
        </div>
      )}
    </>
  );
};

export default Banner;

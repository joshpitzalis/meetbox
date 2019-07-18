import React from "react";

const Landing = () => {
  return (
    <article className="pa3 pa5-ns h-screen flex flex-wrap">
      <header className="w-50-ns w-100 pl3">
        <h1 className="mb-16 font-extrabold mt5 text-5xl text-8xl">
          Meetbox.io
        </h1>
        <h2 className="f3 mid-gray lh-title ">
          A tool to help meetings stay on point.
        </h2>

        <button className="btn btn-blue mv5">Get Started</button>
      </header>
      <ul className="list pl0 w-50-ns w-100">
        <li className="pa3 pa4-ns bb b--black-10">
          <b className="db f3 mb1">1. Before The Meeting, Create An Agenda.</b>
          <span className="f5 db lh-copy measure">
            Use Meetbox to draft a list of everything you want to discuss in
            your next meeting. You can share teh draft with other people that
            might want to add to teh agenda.
          </span>
        </li>
        <li className="pa3 pa4-ns bb b--black-10">
          <b className="db f3 mb1">2. Send Out Invites To Everyone.</b>
          <span className="f5 db lh-copy measure">
            Once the agenda is set you'll get a unique URL to share. If you
            choose to connect a Google account then Meetbox will send out
            calendar invites to everyone you invite.
          </span>
        </li>
        <li className="pa3 pa4-ns bb b--black-10">
          <b className="db f3 mb1">3. Record Decisions During The Meeting.</b>
          <span className="f5 db lh-copy measure">
            When you start a meeting anyone can take notes and assign tasks on
            each agenda item. You can also park ideas at the bottom of the
            agenda during teh meeting. That way you can stay on point without
            constantly addressing tangents.
          </span>
        </li>
        <li className="pa3 pa4-ns">
          <b className="db f3 mb1">
            4. When You're Done, Everything is Shared Instantly.
          </b>
          <span className="f5 db lh-copy measure">
            No summary-email-bottleneck-nonsense with Meetbox. When a meeting is
            done, everyone has a link to all the notes and tasks people agreed
            on, instantly.
          </span>
        </li>
      </ul>
    </article>
  );
};

export default Landing;

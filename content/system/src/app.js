import React from 'react';
import './app.css';

const App = (props) => {
  return (
    <>
      <div className="p-2">
        <div
          className="max-w-md mx-auto aspect-landscape bg-cover bg-center rounded-lg border border-ui-700"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-designsystem.jpg)`,
          }}
        ></div>

        <div className="max-w-sm mx-auto space-y-6 text-ui-100 leading-relaxed my-6">
          <h1>Congratulations!</h1>
          <p className="text-ui-200">
            You are successfully using the G-Loot CSS Framework via npm.
          </p>
          <p className="text-ui-200">
            The G-Loot CSS Framework is a centralized front-end design system
            that allows any developer to quickly build pages that are in line
            with the G-Loot brand and its user interface system.
          </p>
          <hr className="opacity-50" />
          <div className="flex gap-4">
            <a
              href="https://gloot-framework.netlify.app/design-system/about"
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              <span>Read the docs</span>
            </a>
            <a
              href="https://gloot-framework.netlify.app/prototype/home"
              target="_blank"
              rel="noreferrer"
              className="button button-tertiary"
            >
              <span>Browse the prototype</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;

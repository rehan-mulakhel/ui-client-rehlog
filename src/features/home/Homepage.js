import React from 'react';
import './Homepage.scss';

export const Homepage = () => {
  return (
    <div id="homepage-container">
      <h1>Bienvenue</h1>
      <h2>Qui suis-je?</h2>
      <p>
        Je suis un développeur basé en Suisse. Je m&apos;intéresse à
        l&apos;informatique au sens large.
      </p>
      <h2>Pourquoi ce blog?</h2>
      <p>Les raisons qui ont mené à la création de ce site sont multiples.</p>
      <p>
        L&apos;idée m&apos;est venue après avoir réalisé que je n&apos;avais pas
        de traces écrites du travail que j&apos;accomplissais. Le sentiment de
        ne rien faire me pèse sur la conscience. Ces archives me permettront de
        mieux évaluer mon travail.
      </p>
      <p>
        Partager mes connaissances avec l&apos;espoir que cela puisse servir à
        d&apos;autres personnes.
      </p>
      <h2>Où me trouver?</h2>
      <p>En dehors de ce blog, vous pouvez également me retrouver sur:</p>
      <ul>
        <li>
          Sur <a href="https://github.com/rehan-mulakhel">GitHub</a>
        </li>
        <li>
          Sur{' '}
          <a href="https://www.linkedin.com/in/rehan-mulakhel-1a9619173/">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

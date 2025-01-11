import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

window.onload = function(){ // window.addEventListener('load',function(){...}); (for Netscape) and window.attachEvent('onload',function(){...}); (for IE and Opera) also work
    alert('⚠️IMPORTANT⚠️: The GitHub repository is currently taken down. I am working with GitHub on the issues arising, however it could be several days or weeks until it appears again. In the meantime, join the Discord (discord.gg/m4DefhCemY) for more info :) I am currently working on creating a custom filesystem so you can view the code in this website.');
}
const FeatureList = [
  {
    title: 'Easy to Use Scripts',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Utilize userscripts from all your favorite io games within seconds!
      </>
    ),
  },
  {
    title: 'Localhost Popular .io Games with Beginner-Friendly Tutorials',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Beginner friendly tutorials explaining how to localhost and modify the <code>code</code> of dozens of games right in your browser!
      </>
    ),
  },
  {
    title: 'The largest collection ever!',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        It's the only one of it's kind, and it's mantained <b>CONSANTLY</b>, so consider giving us a <a href="https://github.com/cat2d2/io" target="_blank">star</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

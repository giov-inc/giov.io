import Head from "next/head";
import * as cv from "../lib/cv";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";

export default function CV({
  contact,
  intro,
  expertises,
  // skills,
  // experience,
  // education,
  // portfolio,
}) {
  return (
    <Layout>
      <Head></Head>

      <section>
        <div>Photo</div>
        <div className="content">
          <div className="info">
            <h1>
              <span>{contact.firstName}</span> <span>{contact.lastName}</span>
            </h1>
            <div>{contact.job}</div>
          </div>
          <address>
            <ul>
              <li>
                <strong>Location:</strong> {contact.city}, {contact.country}
              </li>
              <li>
                <strong>Email:</strong> {contact.email}
              </li>
              <li>
                <strong>LinkedIn:</strong> {contact.linkedin}
              </li>
            </ul>
          </address>
        </div>
      </section>

      <section>
        <h2>Intro</h2>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: intro.contentHtml }}
        />
      </section>

      <section>
        <h2>Expertises</h2>
        <div className="content">
          <ol>
            {expertises.map(({ title, description, order, contentHtml }) => (
              <li key={title}>
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <div>{order}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* <section>
        <h2>Skills</h2>
        <div className="content">
          <ul>
            {skills.map(({ name }) => (
              <li key={name}>
                <h3>{name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="content">
          <ol>
            {experience.map(({ title, description, job, date, location }) => (
              <li key={title}>
                <div className="details">
                  <Date dateString={date} />
                  <h3>{title}</h3>
                  <div>{job}</div>
                  <div>{location}</div>
                </div>
                <div>{description}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="content">
          <ol>
            {education.map(({ title, description, school, date, location }) => (
              <li key={title}>
                <div className="details">
                  <Date dateString={date} />
                  <h3>{title}</h3>
                  <div>{school}</div>
                  <div>{location}</div>
                </div>
                <div>{description}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <h2>Portfolio</h2>
        <div className="content">
          <ol>
            {portfolio.map(({ title, description, picture }) => (
              <li key={title}>
                <div className="details">
                  <h3>{title}</h3>
                  <div>{description}</div>
                </div>
                <div>{picture}</div>
              </li>
            ))}
          </ol>
        </div>
      </section> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const contact = await cv.getContact();
  const intro = await cv.getIntro();
  const expertises = await cv.getExpertises();
  // const skills = await cv.getSkills();
  // const experience = await cv.getExperience();
  // const education = await cv.getEducation();
  // const portfolio = await cv.getPortfolio();

  return {
    props: {
      contact,
      intro,
      expertises,
      // skills,
      // experience,
      // education,
      // portfolio,
    },
  };
}

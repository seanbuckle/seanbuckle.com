interface ExperienceItem {
  position: string;
  company: string;
  start_date: string;
  end_date?: string;
  description: string;
}

function formatDateRange(
  start: string,
  end?: string,
  locale = typeof navigator !== "undefined" ? navigator.language : "en-GB",
) {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  });
  const startDate = start ? new Date(start) : null;
  const endDate = end ? new Date(end) : null;

  const startStr = startDate ? formatter.format(startDate) : "";
  const endStr = endDate ? formatter.format(endDate) : "Present";

  return startStr && endStr ? `${startStr} – ${endStr}` : startStr || endStr;
}

export function Experience({ experience }: { experience: ExperienceItem[] }) {
  return (
    <>
      <h2>Experience</h2>
      <article class="experience">
        {experience &&
          experience.map((exp: ExperienceItem, i: number) => (
            <section key={i} class="card">
              <h3>{exp.position}</h3>
              <p>{exp.company}</p>
              <p>
                <time>
                  {formatDateRange(exp.start_date, exp.end_date)}
                </time>
              </p>
              <details>
                <summary>Details</summary>
                <ul>
                  {Array.isArray(exp.description)
                    ? exp.description.map((desc, i) => <li key={i}>{desc}</li>)
                    : <li>{exp.description}</li>}
                </ul>
              </details>
            </section>
          ))}
      </article>
    </>
  );
}

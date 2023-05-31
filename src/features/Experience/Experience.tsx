import classNames from "classnames";
import { v4 as uuid } from "uuid";
import styles from "./Experience.module.css";
import { Section, Title } from "@/components/Section";
import { JOBS } from "@/constants";
import { formatJobDate } from "@/utils";
import isEmpty from "lodash/isEmpty";
import size from "lodash/size";

export function Experience() {
  return (
    <Section id="experience" className={styles.wrapper}>
      <Title className="ml-2">Work experience</Title>

      <div className={styles.experience}>
        {JOBS.map(
          (
            { company, role, labels, dates, descriptions, techStack },
            index,
          ) => (
            <div key={`${company}-${role}`} className={styles.section}>
              <div>
                {size(JOBS) - 1 > index && <div className={styles.line} />}
                <div className={styles.circle}>
                  <div className={classNames(styles.dot)} />
                  {!index && <div className={classNames(styles.ping)} />}
                </div>
              </div>

              <div className={styles.job}>
                <div className={styles.head}>
                  <span>
                    <div className={styles.role}>{role}</div>
                    <div className={styles.company}>{company}</div>
                  </span>
                  <div className={styles.labels}>
                    {!!labels?.length &&
                      labels.map(label => (
                        <div key={label} className={styles.label}>
                          {label}
                        </div>
                      ))}
                  </div>
                  <small className={styles.date}>{formatJobDate(dates)}</small>
                </div>
                {!isEmpty(descriptions) && (
                  <div className={styles.descriptions}>
                    {descriptions.map(description => (
                      <div
                        key={uuid()}
                        className={styles.description}
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    ))}
                  </div>
                )}
                <div className={styles.techStack}>
                  {techStack.map(t => (
                    <div key={uuid()} className={styles.item}>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </Section>
  );
}

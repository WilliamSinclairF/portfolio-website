import styles from '../styles/ProjectList.module.css';
import Button from './common/Button';
import Link from 'next/link';
import Image from 'next/image';
import placeholderImage from '../public/images/placeholder.jpg';
import SectionHeader from './common/SectionHeader';

const projects = [
  {
    name: 'Foobar',
    description:
      'lorem ipsum foo bar baz lorem ipsum lorem ipsum foo bar baz lorem ipsum lorem ipsum foo bar baz lorem ipsum',
  },
  {
    name: 'Foobar1',
    description:
      'lorem ipsum foo bar baz lorem ipsum lorem ipsum foo bar baz lorem ipsum lorem ipsum foo bar baz lorem ipsum',
  },
  {
    name: 'Foobar2',
    description:
      'lorem ipsum foo bar baz lorem ipsum lorem ipsum foo bar baz lorem ipsum lorem ipsum foo bar baz lorem ipsum',
  },
  {
    name: 'Foobar3',
    description:
      'lorem ipsum foo bar baz lorem ipsum lorem ipsum foo bar baz lorem ipsum lorem ipsum foo bar baz lorem ipsum',
  },
];

export default function ProjectList() {
  return (
    <>
      <SectionHeader title="Recent Projects" />

      <div className={styles.projectsContainer}>
        {projects.map((p) => (
          <div className={styles.card} key={p.name}>
            <div className="text-center p-s">
              <span className="t-medium">{p.name}</span>
            </div>
            <div className="text-center">
              <Image src={placeholderImage} height="200" width="200" alt="Project photo" />
            </div>
            <div className="text-center">
              <span>{p.description}</span>
            </div>
            <div className="text-center p-s">
              <Link href="" passHref>
                <Button label="See more"></Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

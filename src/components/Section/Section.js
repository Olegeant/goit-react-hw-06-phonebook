import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

import Container from '../Container/Container';

const Section = function ({ children }) {
  return (
    <section className={styles.section}>
      <Container>{children}</Container>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;

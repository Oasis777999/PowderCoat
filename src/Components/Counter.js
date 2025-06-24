// CounterSection.jsx
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 25, label: 'Employees' , suffix: '+'},
  { value: 10, label: 'Large Product Line', suffix: '+' },
  { value: 20000, label: 'Sq. Ft Sprawling Area', suffix: '+' },
];

const Counter = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, i) => {
        const duration = 1500;
        const stepTime = 20;
        const steps = Math.ceil(duration / stepTime);
        const increment = stat.value / steps;
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current < stat.value) {
            setCounts(prev => {
              const updated = [...prev];
              updated[i] = Math.floor(current);
              return updated;
            });
          } else {
            clearInterval(counter);
            setCounts(prev => {
              const updated = [...prev];
              updated[i] = stat.value;
              return updated;
            });
          }
        }, stepTime);
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className={`counter-section py-5 bg-light text-center ${inView ? 'visible' : ''}`}>
      <div className="container">
        <div className="row gy-4">
          {stats.map((stat, idx) => (
            <div className="col-6 col-md-4" key={idx}>
              <h2 className="text-danger fw-bold display-5">
                {counts[idx].toLocaleString()}{stat.suffix || ''}
              </h2>
              <p className="mb-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;

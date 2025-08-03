import React from 'react';

const CourseDetails = ({ enrolled }) => {
  if (enrolled) {
    return <p>✅ You are enrolled in the ReactJS course!</p>;
  }
  return <p>⛔ Please enroll to access the course details.</p>;
};

export default CourseDetails;
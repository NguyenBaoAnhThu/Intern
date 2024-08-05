import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FormPost.module.scss';

const cx = classNames.bind(styles);

function FormPost() {
  const formRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    const name = form.author.value.trim();
    const email = form.email.value.trim();
    const comment = form.comment.value.trim();
    
    if (!name || !email || !comment) {
      setErrorMessage('All fields are required');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:1337/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            Name: name,
            Email: email,
            Comment: comment
          }
        }),
      });

      if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(`Error: ${errorData.message || 'Unknown error'}`);
      }

      setSuccessMessage('Your comment has been submitted successfully!');
      setErrorMessage(''); 
      form.reset();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setErrorMessage(`There was a problem submitting your comment: ${error.message}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form ref={formRef} className={cx("commentForm")} onSubmit={handleSubmit}>
        <p className={cx("comment-form-field-notes")}>* All fields are required</p>
        <div className={cx("input-comment")}>
          <textarea
            id="comment"
            className={cx("form-field")}
            name="comment"
            cols="45"
            rows="6"
            placeholder="Write Message *"
            aria-required="true"
          ></textarea>
        </div>
        <div className={cx('input-inf')}>
          <div className={cx("input-name")}>
            <input
              id="name"
              name="author"
              type="text"
              size="30"
              placeholder="Your Name *"
            />
          </div>
          <div className={cx("input-email")}>
            <input
              id="email"
              name="email"
              type="email"
              size="30"
              placeholder="Your Email *"
            />
          </div>
        </div>
        <div className={cx("form-submit")}>
          <button name="submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
        {successMessage && <p className={cx("success-message")}>{successMessage}</p>}
        {errorMessage && <p className={cx("error-message")}>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default FormPost;

import React from 'react';
import './form.css';
import tokens from './tokens.json';

export default function Textarea({
  id,
  label,
  placeholder,
  value,
  onChange,
  size = 'large',
  orientation = 'vertical',
  state = 'default',
  helperText,
  errorText,
  rows = 4,
  maxLength,
  showCounter = false,
  disabled,
  readOnly
}) {
  const classNames = ['fc-textarea', `fc-${size}`, `fc-${orientation}`, `fc-${state}`];
  if (disabled) classNames.push('fc-disabled');
  if (readOnly) classNames.push('fc-readonly');

  return (
    <div className={classNames.join(' ')}>
      {label && <label htmlFor={id} className="fc-label">{label}</label>}
      <div className="fc-field">
        <textarea
          id={id}
          name={id}
          className="fc-textarea-el"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange && onChange(e.target.value)}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={state === 'Error'}
          aria-describedby={errorText ? `${id}-error` : helperText ? `${id}-help` : undefined}
        />
      </div>
      {showCounter && maxLength ? (
        <div className="fc-counter">{value ? value.length : 0}/{maxLength}</div>
      ) : null}
      {errorText ? (
        <div id={`${id}-error`} className="fc-error">{errorText}</div>
      ) : helperText ? (
        <div id={`${id}-help`} className="fc-helper">{helperText}</div>
      ) : null}
    </div>
  );
}

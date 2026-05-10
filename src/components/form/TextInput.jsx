import React from 'react';
import './form.css';
import tokens from './tokens.json';

export default function TextInput({
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
  prefix,
  suffix,
  disabled,
  readOnly
}) {
  const classNames = ['fc-input', `fc-${size}`, `fc-${orientation}`, `fc-${state}`];
  if (disabled) classNames.push('fc-disabled');
  if (readOnly) classNames.push('fc-readonly');

  return (
    <div className={classNames.join(' ')}>
      {label && <label htmlFor={id} className="fc-label">{label}</label>}
      <div className="fc-field">
        {prefix && <span className="fc-prefix">{prefix}</span>}
        <input
          id={id}
          name={id}
          className="fc-input-el"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange && onChange(e.target.value)}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={state === 'Error'}
          aria-describedby={errorText ? `${id}-error` : helperText ? `${id}-help` : undefined}
        />
        {suffix && <span className="fc-suffix">{suffix}</span>}
      </div>
      {errorText ? (
        <div id={`${id}-error`} className="fc-error">{errorText}</div>
      ) : helperText ? (
        <div id={`${id}-help`} className="fc-helper">{helperText}</div>
      ) : null}
    </div>
  );
}

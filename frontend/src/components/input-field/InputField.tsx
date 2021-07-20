import React, { useRef, useState } from 'react';

export function InputField({onSubmit, disabled, placeholder, initialValue}:
                             {onSubmit: (val: string) => any, disabled?: boolean, placeholder?: string, initialValue?: string | null}) {

  const input = useRef<HTMLInputElement>(null);
  const [ value, setValue ] = useState(initialValue || '');

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.which === 13) {
      submit((event.target as HTMLInputElement).value);
    }
  }

  function onButtonClick() {
    if (input.current) {
      submit(input.current.value)
    }
  }

  function submit(val: string) {
    if (val.length) {
      onSubmit(val);
      setValue('');
    }
  }

  return <div className="input-field">
    <input value={value} ref={input} type="text" onChange={e => setValue(e.target.value)} onKeyUp={e => onKeyUp(e)} disabled={disabled} placeholder={placeholder}/>
    { !disabled && <button onClick={() => onButtonClick()} disabled={!value.length}>Send</button> }
  </div>
}

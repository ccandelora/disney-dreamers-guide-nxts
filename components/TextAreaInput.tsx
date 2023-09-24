import React from "react"

interface Props {
    label: string,
    name: string,
    value: string,
    onTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextAreaInput: React.FC<Props> = ({label, name, value, onTextAreaChange}) => {
    return (
      <div>
        <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
            {label}: 
        </label>
        <div className="mt-2">
          <textarea
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            rows={4}
            name={name}
            id={name}
            value={value}
            onChange={onTextAreaChange}
          />
        </div>
      </div>
    )
  }

  export default TextAreaInput;
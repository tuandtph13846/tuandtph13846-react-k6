import React from 'react'
import styled from 'styled-components'
type Props = {}

const InputSearch = (props: Props) => {
  return (
    <AutoCompleteCustom>
        <input type="text" placeholder="Search.."></input>
    </AutoCompleteCustom>
  )
}

const AutoCompleteCustom = styled.div`
    width: 500px;
`
export default InputSearch
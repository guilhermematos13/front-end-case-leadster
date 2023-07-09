import { styled } from 'styled-components'
import { SelectStyledProps } from './interface'

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 5;
`

export const SelectLabel = styled.label`
  font-weight: 700;

  @media (min-width: 320px) {
    font-size: 0.875rem;
  }

  @media (min-width: 425px) {
    font-size: 1rem;
  }
`

export const SelectOption = styled.div`
  padding: 10px;
`
export const Select = styled.div`
  width: 200px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #000000;
`
export const SelectHeader = styled.div<SelectStyledProps>`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: all 300ms ease;
  }
`

export const SelectOptions = styled.div<SelectStyledProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  margin-top: 10px;
  width: 200px;
  border: 1px solid #000000;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background-color: white;
`
